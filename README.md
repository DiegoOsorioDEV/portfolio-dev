# 🎨 Portafolio · Diego Osorio

**Sitio web profesional y portafolio personal**

Portafolio personal de **Diego Alberto Osorio López** — Ingeniero de Software & DevOps. Diseñado y desarrollado con tecnologías modernas para presentar proyectos, habilidades técnicas y trayectoria profesional.

**🌐 [Ver sitio en vivo](https://portfolio-dev-gamma-lyart.vercel.app)**

---

## 📋 Tabla de Contenidos

- [Características](#características)
- [Stack Tecnológico](#stack-tecnológico)
- [Requisitos Previos](#requisitos-previos)
- [Instalación y Desarrollo](#instalación-y-desarrollo)
- [Scripts Disponibles](#scripts-disponibles)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Despliegue](#despliegue)
- [Roadmap](#roadmap)
- [Autor](#autor)

---

## 🌟 Características

| Área | Detalle |
|------|---------|
| **Rendimiento** | Generación estática (SSG) y SSR optimizados con Next.js App Router |
| **Tipado** | TypeScript en todo el código para mayor seguridad |
| **Diseño** | Tailwind CSS v4 con enfoque mobile-first y responsive |
| **Animaciones** | Framer Motion para transiciones fluidas y profesionales |
| **SEO** | Metadata y Open Graph configurables automáticamente |
| **Iconografía** | Iconos de Lucide React, escalables y personalizables |
| **Accesibilidad** | Cumple estándares WCAG para máxima inclusión |
| **Despliegue** | Optimizado para Vercel y cualquier hosting Node.js |

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Descripción |
|-----------|---------|------------|
| **Next.js** | 16.2.6 | Framework React con SSR/SSG y App Router |
| **React** | 19.2.4 | Librería de UI moderna |
| **TypeScript** | 5.x | Lenguaje tipado para mayor seguridad |
| **Tailwind CSS** | 4.x | Framework de estilos utility-first |
| **Framer Motion** | 12.40.0 | Librería de animaciones web |
| **Lucide React** | 1.16.0 | Iconografía moderna y personalizable |
| **Lenis** | 1.3.23 | Scroll suave y fluido |
| **ESLint** | 9.x | Linting y calidad de código |

---

## 📋 Requisitos Previos

- **Node.js** 20.x o superior (recomendado: LTS 22.x)
- **npm** 10+ (o pnpm/yarn, ajustando comandos)

Verifica tu entorno:

```bash
node -v     # v20.10.0 o superior
npm -v      # 10.2.0 o superior
```

---

## 🚀 Instalación y Desarrollo

### 1. Clonar el repositorio

```bash
git clone https://github.com/DiegoOsorioDEV/Portafolio.git
cd Portafolio
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Iniciar servidor de desarrollo

```bash
npm run dev
```

### 4. Abrir en el navegador

```
http://localhost:3000
```

Los cambios se actualizan automáticamente gracias a **Fast Refresh**.

---

## 💻 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor en localhost:3000 con hot reload

# Build y producción
npm run build        # Compilación optimizada para producción
npm run start        # Sirve el build (ejecutar build primero)

# Calidad de código
npm run lint         # Análisis con ESLint
npm run lint:fix     # Fix automático de ESLint
```

### Verificar build de producción localmente

```bash
npm run build
npm run start        # Accede a http://localhost:3000
```

---

## 📁 Estructura del Proyecto

### Estructura Actual

```
Portafolio/
├── app/
│   ├── layout.tsx              # Layout raíz, fuentes, metadata global
│   ├── page.tsx                # Página principal
│   ├── globals.css             # Variables CSS y estilos globales
│   └── favicon.ico
├── public/
│   ├── CV_DiegoOsorio.pdf      # Currículum descargar
│   ├── images/                 # Imágenes y screenshots
│   └── hero-bg.jpg             # Imagen de fondo
├── next.config.ts              # Configuración Next.js
├── postcss.config.mjs           # Configuración PostCSS/Tailwind
├── tsconfig.json               # Configuración TypeScript
├── tailwind.config.ts          # Configuración Tailwind CSS
├── package.json
└── README.md
```

### Estructura Proyectada (en desarrollo)

```
Portafolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/                     # Componentes reutilizables
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Section.tsx
│   ├── sections/               # Secciones de la página
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   └── Layout.tsx              # Layout principal
├── data/
│   ├── portfolio.ts            # Contenido centralizado
│   ├── projects.ts             # Lista de proyectos
│   ├── skills.ts               # Stack técnico
│   └── social.ts               # Enlaces de contacto
├── public/
├── styles/
│   └── animations.css          # Animaciones personalizadas
└── types/
    └── index.ts                # TypeScript types globales
```

---

## 🎯 Secciones Principales

### 1. **Navbar/Header**
- Navegación responsiva
- Links a secciones principales
- Modo oscuro/claro (planificado)

### 2. **Hero Section**
- Presentación personal
- Título y descripción
- CTA (Llama a la acción)
- Animaciones de entrada

### 3. **Sobre Mí**
- Biografía profesional
- Experiencia y formación
- Timeline de carrera

### 4. **Proyectos Destacados**
- Cards de proyectos
- Descripción y tecnologías
- Links a repositorios y demos
- Filtrado por categoría

### 5. **Habilidades Técnicas**
- Backend: NestJS, Laravel, Node.js
- Frontend: React, Vue, React Native
- Herramientas: Docker, AWS, Git
- Bases de datos: MongoDB, PostgreSQL, MySQL

### 6. **Contacto**
- Formulario de contacto
- Enlaces a redes sociales
- Email y ubicación
- Descarga de CV

---

## 🔒 SEO y Metadata

El proyecto incluye:

- **Meta tags** optimizadas para buscadores
- **Open Graph** para redes sociales
- **Robots.txt** para crawlers
- **Sitemap.xml** para indexación
- **Canonical URLs** para evitar duplicados

Configurables desde `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Diego Osorio - Ingeniero de Software",
  description: "Portfolio profesional de Diego Osorio",
  openGraph: {
    // Open Graph config
  },
};
```

---

## 🎨 Diseño y Temas

- **Mobile-first**: Diseñado para móvil primero
- **Responsive**: Funciona en todos los dispositivos
- **Accesibilidad**: Cumple WCAG 2.1 AA
- **Tema personalizable**: Colores y fuentes configurables
- **Dark mode**: Soporte para modo oscuro (planificado)

---

## 📦 Dependencias Principales

```json
{
  "next": "16.2.6",
  "react": "19.2.4",
  "react-dom": "19.2.4",
  "tailwindcss": "4.x",
  "framer-motion": "^12.40.0",
  "lucide-react": "^1.16.0",
  "lenis": "^1.3.23"
}
```

---

## 🚀 Despliegue

### En Vercel (Recomendado)

1. **Conectar repositorio:**
   - Ve a [Vercel](https://vercel.com)
   - Importa el repositorio de GitHub
   - Selecciona `Portafolio`

2. **Configuración automática:**
   - Framework: **Next.js** (detectado automáticamente)
   - Build command: `npm run build`
   - Output directory: `.next`

3. **Deploy:**
   - Click en **Deploy**
   - Tu portfolio estará en línea en minutos

### En otros servidores

```bash
# Build
npm run build

# Transferir carpeta .next y node_modules
# Ejecutar en servidor:
npm run start
```

**Requisitos:**
- Node.js 20+
- npm instalado
- Puerto 3000 disponible

---

## 🧪 Testing y Calidad

```bash
# Linting
npm run lint

# Fix automático
npm run lint:fix
```

---

## 📈 Roadmap

### Fase 1: MVP (Completado ✅)
- ✅ Setup Next.js 16 + React 19
- ✅ Tailwind CSS v4
- ✅ Estructura base
- ✅ Responsive design

### Fase 2: Contenido (En progreso 🔄)
- 🔄 Componentes reutilizables
- 🔄 Secciones principales
- 🔄 Proyectos destacados
- 🔄 Formulario de contacto

### Fase 3: Mejoras (Próximo ⏳)
- ⏳ Animaciones con Framer Motion
- ⏳ Modo oscuro/claro
- ⏳ Blog de artículos
- ⏳ Sistema de comentarios

### Fase 4: Optimización (Futuro 🎯)
- ⏳ Analytics (Google Analytics)
- ⏳ Caché y CDN
- ⏳ Performance monitoring
- ⏳ Múltiples idiomas (i18n)

---

## 🤝 Contribuciones

Este es un proyecto personal, pero las sugerencias son bienvenidas:

1. Fork el repositorio
2. Crea una rama (`git checkout -b feature/suggestion`)
3. Commit tus cambios (`git commit -m 'Add suggestion'`)
4. Push (`git push origin feature/suggestion`)
5. Abre un Pull Request

---

## 📝 Licencia

Proyecto de uso personal. **Todos los derechos reservados © Diego Osorio 2026.**

Puedes usar este código como referencia, pero no para fines comerciales sin autorización.

---

## 👨‍💻 Autor

**Diego Alberto Osorio López**  
Ingeniero de Software & DevOps · Full Stack & Cloud Engineer

- **Email:** osoriodiego877@gmail.com
- **GitHub:** [@DiegoOsorioDEV](https://github.com/DiegoOsorioDEV)
- **LinkedIn:** [Diego Osorio](https://linkedin.com/in/diegoosorio)
- **Ubicación:** Toluca, México 🇲🇽

---

## 📞 Contacto

¿Interesado en colaborar? Contáctame:

- 📧 **Email:** osoriodiego877@gmail.com
- 💼 **LinkedIn:** [Diego Osorio](https://linkedin.com/in/diegoosorio)
- 🐙 **GitHub:** [@DiegoOsorioDEV](https://github.com/DiegoOsorioDEV)
- 🌐 **Portfolio:** [portfolio-dev-gamma-lyart.vercel.app](https://portfolio-dev-gamma-lyart.vercel.app)

---

## 🙏 Agradecimientos

- [Next.js](https://nextjs.org/) - Framework increíble
- [React](https://react.dev/) - Librería UI moderna
- [Tailwind CSS](https://tailwindcss.com/) - Estilos eficientes
- [Framer Motion](https://www.framer.com/motion/) - Animaciones fluidas
- [Vercel](https://vercel.com) - Hosting y deployment

---

**Última actualización:** Julio 2026

**⭐ Si te gustó este proyecto, ¡considera darle una estrella!**
