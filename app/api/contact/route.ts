import {
  MAX_SENDS,
  SEND_WINDOW_MS,
  normalizeEmail,
  pruneSends,
} from "@/lib/contact-limit";

// ============================================================
// POST /api/contact — recibe el formulario del modal de
// contacto, valida, aplica el límite de envíos por correo
// (máximo 2 cada 24 h) y reenvía el mensaje a Formspree.
// ============================================================

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MAX_NOMBRE = 80;
const MAX_CORREO = 120;
const MIN_MENSAJE = 10;
const MAX_MENSAJE = 2000;

// Contador por correo en memoria. Se guarda en globalThis para
// sobrevivir al HMR en desarrollo. Nota: en serverless (Vercel)
// la memoria vive por instancia y es efímera, así que este
// contador es una red de seguridad; el límite real lo mantiene
// el cliente en localStorage (ver lib/contact-limit.ts).
type SendLog = Record<string, number[]>;
const globalStore = globalThis as typeof globalThis & { contactSends?: SendLog };
const store: SendLog = (globalStore.contactSends ??= {});

type Payload = {
  nombre?: unknown;
  correo?: unknown;
  mensaje?: unknown;
  interes?: unknown;
  /** Honeypot: campo oculto que solo rellenan los bots. */
  empresa?: unknown;
};

function jsonError(error: string, status: number, extra?: ResponseInit) {
  return Response.json({ error }, { status, ...extra });
}

type InvalidField = "json" | "nombre" | "correo" | "mensaje";

/** 400 con el campo exacto que falló (lo muestra el formulario). */
function jsonInvalid(field: InvalidField) {
  console.warn(`[contact] validación fallida → 400 (${field})`);
  return Response.json({ error: "invalid", field }, { status: 400 });
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return jsonInvalid("json");
  }

  const nombre = typeof body.nombre === "string" ? body.nombre.trim() : "";
  const correo = normalizeEmail(typeof body.correo === "string" ? body.correo : "");
  const mensaje = typeof body.mensaje === "string" ? body.mensaje.trim() : "";
  const interes = typeof body.interes === "string" ? body.interes.trim() : "";
  const honeypot = typeof body.empresa === "string" ? body.empresa.trim() : "";

  // Honeypot relleno: es un bot. Fingimos éxito para no delatarlo.
  if (honeypot) return Response.json({ ok: true });

  if (!nombre || nombre.length > MAX_NOMBRE) return jsonInvalid("nombre");
  if (!EMAIL_RE.test(correo) || correo.length > MAX_CORREO)
    return jsonInvalid("correo");
  if (mensaje.length < MIN_MENSAJE || mensaje.length > MAX_MENSAJE)
    return jsonInvalid("mensaje");

  // Límite de envíos por correo (2 cada 24 h).
  const now = Date.now();
  const sends = pruneSends(store[correo] ?? [], now);
  if (sends.length >= MAX_SENDS) {
    const retryAfterSec = Math.max(
      1,
      Math.ceil((sends[0] + SEND_WINDOW_MS - now) / 1000)
    );
    return jsonError("limit", 429, {
      headers: { "Retry-After": String(retryAfterSec) },
    });
  }

  const endpoint =
    process.env.FORMSPREE_ENDPOINT ?? process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  if (!endpoint) return jsonError("config", 500);

  let upstream: Response;
  try {
    upstream = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        nombre,
        correo,
        // `email` es el campo que Formspree usa como reply-to.
        email: correo,
        mensaje,
        interes,
      }),
    });
  } catch {
    return jsonError("upstream", 502);
  }

  // Si Formspree falló, no contamos el envío: puede reintentar.
  if (!upstream.ok) return jsonError("upstream", 502);

  store[correo] = [...sends, now];
  return Response.json({ ok: true });
}
