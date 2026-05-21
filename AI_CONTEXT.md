# AI Context — Mi Portfolio

## Descripción del proyecto
Portfolio personal de Pablo Igei Nakagawa, desarrollador .NET. Single-page application con secciones ancladas: Hero, About, Skills, Technologies, Projects, Contact + 404.

## Stack técnico
| Tipo | Tecnología | Versión |
|---|---|---|
| UI | React | ^19.1.0 |
| Lenguaje | TypeScript | ~5.8.3 |
| Build | Vite | ^7.0.4 |
| Routing | react-router-dom | ^7.7.0 |
| CSS | Tailwind CSS (v4, `@tailwindcss/vite`) | ^4.1.11 |
| Animaciones | GSAP (ScrollTrigger) | ^3.13.0 |
| Email | @emailjs/browser | ^4.4.1 |
| Captcha | react-google-recaptcha | ^3.1.0 |
| Fuentes | @fontsource/montserrat, open-sans, roboto | ^5.2.6 |

## Scripts
- `pnpm dev` — Dev server (Vite)
- `pnpm build` — `tsc -b && vite build`
- `pnpm lint` — ESLint flat config
- `pnpm preview` — Vista previa del build

## Estructura de directorios
```
src/
├── App.tsx                    # Router root (Layout + Home + NotFound)
├── index.css                  # Tailwind + @theme (fonts) + custom-variant dark
├── main.tsx                   # Entry point (BrowserRouter)
├── assets/
│   ├── CV_PabloIgeiNakagawa.pdf
│   ├── hero/foto.webp
│   ├── projects/{boca_juniors, combi_commander, portfolio, tech_store}/
│   └── technologies/ (SVGs)
├── components/
│   ├── Buttons.tsx            # ButtonCode, ButtonDemo
│   └── SectionTitle.tsx       # Título animado con GSAP
├── layout/
│   ├── Footer.tsx
│   ├── Layout.tsx             # Header + Outlet + Footer
│   └── header/
│       ├── Header.tsx         # Nav fijo, scroll tracking, menú mobile
│       └── DropdownTema.tsx   # Theme switcher (claro/oscuro/sistema)
└── pages/
    ├── home/
    │   ├── Home.tsx           # Composición de secciones
    │   └── components/
    │       ├── about/About.tsx
    │       ├── contact/Contact.tsx
    │       ├── education/Education.tsx   # STUB — sin implementar
    │       ├── hero/Hero.tsx, HeroData.tsx, HeroDescription.tsx, ButtonSocial.tsx
    │       ├── projects/Projects.tsx, ProjectsData.ts, ProjectCard.tsx
    │       ├── skills/Skills.tsx
    │       └── technologies/Technologies.tsx, TechnologiesData.tsx, TechnologyCard.tsx
    └── not-found/NotFound.tsx
api/
└── verify-recaptcha.js        # Serverless function (Vercel)
```

## Routing
- `/` → `<Home />` con secciones: hero, about, skills, technologies, projects, contact
- `*` → `<NotFound />`
- Layout wrapper con Header + Footer
- ScrollToTop y ScrollToSeccion para navegación entre secciones

## Patrones y convenciones
1. **Composición:** `Home.tsx` importa y renderiza todas las secciones en orden
2. **Data-driven:** Hero, Technologies y Projects separan datos en archivos `*Data.tsx`
3. **Animaciones:** GSAP con `useEffect` + `ctx.revert()` cleanup. ScrollTrigger con `once: true`
4. **Tema oscuro:** `data-theme` en `<html>`, switcher con persistencia en localStorage
5. **Contacto:** reCAPTCHA v2 + verificación serverless + EmailJS
6. **Sin state management:** Solo estado local de componentes
7. **Imágenes de proyectos:** `import.meta.glob({ eager: true })` con filtro por carpeta
8. **CSS:** 100% Tailwind utility classes. `App.css` vacío.

## Variables de entorno (`.env.local`)
```
RECAPTCHA_SECRET_KEY=...
VITE_RECAPTCHA_SITE_KEY=...
```

## Convenciones de código
- Sin comentarios en el código
- Imports ordenados (React, librerías, componentes, assets)
- Props tipadas con interfaces
- Sin any
- Preferir early returns
- Nombres de componentes en PascalCase, archivos en CamelCase con subcarpetas
