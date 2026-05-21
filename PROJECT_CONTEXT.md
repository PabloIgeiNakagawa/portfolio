# Contexto del Proyecto - Mi Portfolio

## Información General
- **Nombre:** Portfolio personal de Pablo Igei Nakagawa
- **Repo:** https://github.com/PabloIgeiNakagawa/portfolio.git
- **Deploy:** https://portfolio-pabloigeinakagawas-projects.vercel.app (Vercel)
- **Contacto:** pabloigeinaka@gmail.com | linkedin.com/in/pabloigeinakagawa

## Stack Tecnológico
- **Framework:** React 19 + TypeScript
- **Build:** Vite 7
- **Estilos:** TailwindCSS 4
- **Routing:** React Router DOM 7
- **Animaciones:** GSAP 3
- **Fonts:** Inter, Montserrat, Open Sans, Roboto (@fontsource)
- **Otros:** emailjs/browser (contacto), react-google-recaptcha
- **Deploy:** Vercel (SPA con rewrites)

## Scripts
```bash
npm run dev       # Servidor de desarrollo
npm run build     # Typecheck + build (tsc -b && vite build)
npm run lint      # ESLint
npm run preview   # Preview del build
```

## Estructura de Carpetas
```
src/
├── assets/           # Imágenes, videos, iconos
├── components/       # Componentes reutilizables (Navbar, Footer, etc.)
├── layout/           # Layout principal (Layout.tsx)
├── pages/            # Páginas
│   ├── home/         # Página principal
│   │   ├── components/hero/  # Hero, HeroData, ButtonSocial
│   │   ├── About.tsx
│   │   ├── Technologies.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   └── not-found/    # Página 404
├── utils/            # Utilidades
├── App.tsx           # Rutas (BrowserRouter, Layout, Home, NotFound)
└── main.tsx          # Entry point
api/
└── verify-recaptcha.js  # API route para reCAPTCHA (Vercel)
```

## Routing
- `/` → Home (página principal con Hero, About, Technologies, Projects, Contact)
- `*` → NotFound

## Características
- Diseño responsive
- Modo claro/oscuro (toggle automático según preferencia del sistema)
- Animaciones con GSAP
- Lazy loading de imágenes
- SEO optimizado (meta tags, Open Graph, Twitter Cards)
- Formulario de contacto con reCAPTCHA + emailjs

## Flujo de Trabajo
- **Formato de commit:** `Tipo: Descripción breve`
- Tipos: feat, fix, perf, docs, chore, refactor
- **Body del commit:** opcional, explicar qué, por qué y cómo probar
- **Verificación:** `npm run build` para chequear que compila
- **IMPORTANTE:** NO hacer commits ni push hasta que el usuario lo indique

## Notas
- Variables de entorno en `.env.local` (no commitear)
- ESLint configurado con typescript-eslint + react-hooks + react-refresh
- tsconfig en modo project references (tsconfig.app.json + tsconfig.node.json)
- Vercel configurado con SPA rewrites (vercel.json)
