# Portafolio · Diego Osorio

Sitio web personal y portafolio profesional de **Diego Alberto Osorio López**, Ingeniero de Software y DevOps. Presenta trayectoria, stack técnico, proyectos destacados y canales de contacto en una experiencia rápida, accesible y optimizada para despliegue en la nube.

> Estado del proyecto: **en desarrollo activo** — la aplicación se está reconstruyendo desde una base limpia con Next.js.

---

## Tabla de contenidos

- [Características](#características)
- [Stack tecnológico](#stack-tecnológico)
- [Requisitos previos](#requisitos-previos)
- [Instalación y desarrollo](#instalación-y-desarrollo)
- [Scripts disponibles](#scripts-disponibles)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Despliegue](#despliegue)
- [Autor](#autor)

---

## Características

| Área | Detalle |
|------|---------|
| **Rendimiento** | Generación estática y optimización con Next.js App Router |
| **Tipado** | TypeScript en todo el código de aplicación |
| **UI** | Tailwind CSS v4 con diseño responsive (mobile-first) |
| **Contenido** | Datos centralizados y componentes reutilizables (en roadmap) |
| **SEO** | Metadata y Open Graph configurables desde `app/layout.tsx` |
| **Deploy** | Compatible con Vercel y cualquier hosting Node.js |

---

## Stack tecnológico

| Tecnología | Uso |
|------------|-----|
| [Next.js 16](https://nextjs.org/) | Framework, App Router, SSR/SSG |
| [React 19](https://react.dev/) | Interfaz de usuario |
| [TypeScript](https://www.typescriptlang.org/) | Tipado estático |
| [Tailwind CSS 4](https://tailwindcss.com/) | Estilos y diseño responsive |
| [Framer Motion](https://www.framer.com/motion/) | Animaciones (planificado) |
| [Lucide React](https://lucide.dev/) | Iconografía (planificado) |
| [ESLint](https://eslint.org/) | Calidad y consistencia de código |

---

## Requisitos previos

- **Node.js** 20.x o superior (recomendado: LTS)
- **npm** 10+ (o pnpm / yarn, ajustando los comandos)

Comprueba tu entorno:

```bash
node -v
npm -v
```

---

## Instalación y desarrollo

1. Clona el repositorio:

```bash
git clone <url-del-repositorio>
cd mi-portafolio
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

4. Abre en el navegador:

**[http://localhost:3000](http://localhost:3000)**

Los cambios en `app/` se reflejan en caliente gracias a Fast Refresh.

---

## Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo en `localhost:3000` |
| `npm run build` | Compilación de producción |
| `npm run start` | Sirve el build de producción (ejecutar `build` antes) |
| `npm run lint` | Análisis estático con ESLint |

Verificación local de producción:

```bash
npm run build
npm run start
```

---

## Estructura del proyecto

```text
mi-portafolio/
├── app/
│   ├── layout.tsx       # Layout raíz, fuentes y metadata
│   ├── page.tsx         # Página principal
│   └── globals.css      # Variables CSS y estilos globales
├── public/              # Assets estáticos (favicon, CV, imágenes)
├── next.config.ts       # Configuración de Next.js
├── postcss.config.mjs   # PostCSS / Tailwind
├── tsconfig.json        # TypeScript
└── package.json
```

Estructura prevista a medida que avance el desarrollo:

```text
├── components/          # UI por secciones (Navbar, Hero, etc.)
├── components/ui/       # Primitivos reutilizables
└── data/
    └── portfolio.ts     # Contenido centralizado del portafolio
```

---

## Despliegue

El proyecto está pensado para desplegarse en **[Vercel](https://vercel.com)** con integración continua desde Git:

1. Conecta el repositorio en Vercel.
2. Framework detectado: **Next.js** (sin configuración extra).
3. Comando de build: `npm run build`.
4. Directorio de salida: gestionado automáticamente por Next.js.

También puedes desplegar en cualquier plataforma que soporte Node.js 20+ ejecutando `npm run build` y `npm run start`.

---

## Autor

**Diego Alberto Osorio López**  
Ingeniero de Software & DevOps · Full Stack & Cloud Engineer

- Correo: [osoriodiego877@gmail.com](mailto:osoriodiego877@gmail.com)
- Ubicación: Toluca, México

---

## Licencia

Proyecto de uso personal. Todos los derechos reservados © Diego Osorio.