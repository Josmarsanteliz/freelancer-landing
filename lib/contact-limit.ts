// ============================================================
// Límite de envíos del formulario de contacto.
//
// Una misma persona (identificada por su correo) puede enviar
// como máximo MAX_SENDS mensajes cada SEND_WINDOW_MS.
//
// - Cliente: contador en localStorage (funciona siempre y da
//   la inmediata al usuario).
// - Servidor: contador en memoria en app/api/contact/route.ts
//   (red de seguridad adicional; en serverless es efímero).
// ============================================================

export const MAX_SENDS = 2;
export const SEND_WINDOW_MS = 24 * 60 * 60 * 1000; // 24 horas

const STORAGE_KEY = "contact_sends_v1";

type SendLog = Record<string, number[]>;

/** Normaliza el correo para usarlo como clave (minúsculas y sin espacios). */
export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

/** Descarta los envíos que ya salieron de la ventana de 24 h. */
export function pruneSends(timestamps: number[], now = Date.now()): number[] {
  return timestamps.filter((ts) => now - ts < SEND_WINDOW_MS);
}

// ------------------------- Cliente -------------------------

function readLog(): SendLog {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
    return parsed as SendLog;
  } catch {
    return {};
  }
}

function writeLog(log: SendLog): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(log));
  } catch {
    // localStorage lleno o bloqueado: no se puede registrar, pero
    // el límite del servidor sigue aplicando.
  }
}

/** Cuántos mensajes le quedan a este correo en la ventana actual. */
export function sendsLeft(email: string): number {
  const key = normalizeEmail(email);
  if (!key) return MAX_SENDS;
  const sends = pruneSends(readLog()[key] ?? []);
  return Math.max(0, MAX_SENDS - sends.length);
}

/** true si ya agotó sus envíos en las últimas 24 h. */
export function isBlocked(email: string): boolean {
  return sendsLeft(email) <= 0;
}

/** Registra un envío exitoso para este correo. */
export function recordSend(email: string): void {
  const key = normalizeEmail(email);
  if (!key) return;
  const log = readLog();
  log[key] = [...pruneSends(log[key] ?? []), Date.now()];
  writeLog(log);
}
