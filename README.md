# Freelancer Landing — Josmar Santeliz

Landing page animada para un desarrollador de software freelance. Muestra los servicios, los paquetes por proyecto y el stack tecnológico.

## 🛠 Stack

- [Next.js 16](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) — animaciones
- [react-icons](https://react-icons.github.io/react-icons/) — iconos de tecnologías

## 🚀 Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## 📦 Producción

```bash
npm run build
npm run start
```

Listo para desplegar en [Vercel](https://vercel.com) sin configuración extra.

## ✏️ Editar contenido

Todo el contenido editable está centralizado en [`lib/data.ts`](lib/data.ts):

| Dato | Dónde |
|---|---|
| Nombre, email, LinkedIn, GitHub | `SITE` |
| Palabras rotativas del hero | `HERO_WORDS` |
| Stack mostrado | `STACK` |
| Paquetes por proyecto | `PLANS` |
| Proyectos del portafolio | `PROJECTS` |
| Estadísticas "Sobre mí" | `STATS` |
| Preguntas del FAQ | `FAQS` |

## 🧩 Secciones

Hero (máquina de escribir) → Stack → Planes → Portafolio → Sobre mí → FAQ → Contacto → Footer