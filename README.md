# Link Hub Premium

Link hub renovado tipo Linktree con diseño premium, oscuro y elegante con acento violeta. Desarrollado con React, TailwindCSS y Framer Motion.

**URL:** misenlaces.joaquin-cabrera.com

## 🎯 Características

- ✨ **Diseño Premium**: Tema oscuro elegante con acento violeta, sin estética neón/gamer
- 📱 **Mobile-First**: Diseño optimizado primero para móviles, luego desktop
- 🎨 **Microinteracciones**: Animaciones suaves con Framer Motion
- 👤 **Múltiples Perfiles**: Perfil personal y profesional/emprendimiento
- ⚡ **Performance**: Optimizado para LCP rápido y carga eficiente
- ♿ **Accesible**: Navegación por teclado, contraste adecuado, semántica HTML
- 🔍 **SEO**: Meta tags y OpenGraph configurados por perfil
- 📦 **Estático**: Deployable en GitHub Pages sin backend

## 🛠️ Stack Tecnológico

- **React 18** - Framework de UI
- **Vite** - Build tool moderna y rápida
- **TailwindCSS** - Estilos utility-first
- **Framer Motion** - Animaciones y microinteracciones
- **React Router** - Routing del lado del cliente
- **Lucide React** - Iconografía consistente
- **React Helmet Async** - Gestión de SEO y meta tags

## 📁 Estructura del Proyecto

```
link-hub/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── ThemeBackground.jsx
│   │   ├── ProfileHeader.jsx
│   │   ├── LinkButton.jsx
│   │   ├── Section.jsx
│   │   └── SocialBar.jsx
│   ├── pages/               # Páginas/rutas
│   │   ├── Home.jsx
│   │   ├── Personal.jsx
│   │   └── Pro.jsx
│   ├── data/                # Datos configurables
│   │   └── profiles.json
│   ├── App.jsx              # Componente principal con routing
│   ├── main.jsx             # Punto de entrada
│   └── index.css            # Estilos globales y Tailwind
├── assets/                  # Recursos estáticos
│   ├── avatar.jpg           # Avatar personal (agregar manualmente)
│   └── avatar-sirac.jpg     # Avatar profesional (agregar manualmente)
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🚀 Desarrollo Local

### Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo (con hot reload)
npm run dev

# Build para producción
npm run build

# Preview del build de producción
npm run preview
```

El servidor de desarrollo se abrirá en `http://localhost:3000`

## 📝 Configuración de Perfiles

Los perfiles se configuran en `src/data/profiles.json`. Cada perfil tiene:

```json
{
  "personal": {
    "id": "personal",
    "name": "Joaquín Cabrera",
    "handle": "@joaco.a.cab",
    "bio": "Descripción del perfil",
    "avatarUrl": "/assets/avatar.jpg",
    "theme": {
      "accent": "#9333ea"
    },
    "links": [
      {
        "title": "Título del enlace",
        "subtitle": "Subtítulo opcional",
        "url": "https://ejemplo.com",
        "icon": "Instagram",
        "highlight": true,
        "section": "principal"
      }
    ],
    "social": [
      {
        "platform": "Instagram",
        "url": "https://instagram.com/..."
      }
    ],
    "seo": {
      "title": "Título SEO",
      "description": "Descripción SEO",
      "ogImage": "/assets/og-personal.jpg"
    }
  }
}
```

### Iconos Disponibles

Los iconos usan [Lucide React](https://lucide.dev/). Algunos comunes:
- `Instagram`, `Linkedin`, `Twitter`, `Github`, `Mail`, `Globe`, `Link`, `ArrowRight`

### Secciones

Las secciones disponibles son:
- `principal` - Links principales destacados
- `proyectos` - Portfolio y proyectos
- `portfolio` - Alias de proyectos
- `contacto` - Información de contacto

## 🎨 Personalización

### Colores

Los colores se configuran en `tailwind.config.js`:

```js
colors: {
  bg: {
    primary: '#0a0614',
    secondary: '#1a0a2e',
    tertiary: '#2d1b4e',
  },
  accent: {
    DEFAULT: '#9333ea',
    hover: '#a855f7',
  },
  // ...
}
```

### Tipografía

La fuente se configura en `src/index.css` (actualmente Inter de Google Fonts).

## 🚀 Deploy en GitHub Pages

### Opción 1: Deploy Automático (Recomendado)

1. **Crear repositorio en GitHub**

2. **Configurar GitHub Actions** (si no existe):
   - Crear `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
         - run: npm ci
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

3. **Habilitar GitHub Pages**
   - Ir a Settings > Pages
   - Source: **GitHub Actions** (no "Deploy from a branch")

4. **Configurar dominio personalizado** (opcional)
   - En Settings > Pages, agregar dominio: `misenlaces.joaquin-cabrera.com`
   - **Importante**: Actualizar `vite.config.js` cambiando `base: '/misenlaces/'` a `base: '/'`
   - Configurar DNS según instrucciones de GitHub

### Opción 2: Deploy Manual

```bash
# Build del proyecto
npm run build

# La carpeta dist/ contiene los archivos estáticos
# Subir el contenido de dist/ a la rama gh-pages
```

### Configuración del Base Path

En `vite.config.js`:

- **Con dominio personalizado**: `base: '/'`
- **Sin dominio (subpath)**: `base: '/misenlaces/'` o `base: '/nombre-repo/'`

**Importante**: Si cambias el `base`, también debes actualizar las rutas en `src/App.jsx` si usas rutas relativas.

## 📱 Rutas Disponibles

- `/` - Página de inicio con selector de perfiles
- `/personal` - Perfil personal
- `/pro` o `/sirac` - Perfil profesional/emprendimiento

## ✅ Checklist Pre-Deploy

- [ ] Agregar `assets/avatar.jpg` (avatar personal, recomendado: 400x400px)
- [ ] Agregar `assets/avatar-sirac.jpg` (avatar profesional, recomendado: 400x400px)
- [ ] Actualizar todas las URLs en `src/data/profiles.json`
- [ ] Personalizar nombres, bios y handles en `profiles.json`
- [ ] Configurar imágenes OpenGraph (opcional): `assets/og-personal.jpg` y `assets/og-sirac.jpg`
- [ ] Probar en diferentes dispositivos (móvil, tablet, desktop)
- [ ] Verificar accesibilidad (navegación por teclado, contraste)
- [ ] Configurar dominio personalizado (si aplica)
- [ ] Verificar que el `base` en `vite.config.js` sea correcto

## 🎨 Decisiones de Diseño

### Paleta de Colores
- **Fondo oscuro profundo**: Gradiente sutil con textura/grain
- **Acento violeta**: `#9333ea` para elementos interactivos
- **Superficies**: Transparencias con backdrop blur para profundidad
- **Texto**: Blanco primario, lavanda secundario, gris violeta para muted

### Componentes
- **Botones tipo "pill"**: Bordes redondeados grandes, padding generoso
- **Estados hover**: Elevación sutil, sombra suave, transición 150-200ms
- **Estados active**: Scale down muy leve (0.98)
- **Focus visible**: Outline claro para accesibilidad

### Microinteracciones
- **Animación de entrada**: Stagger suave con Framer Motion
- **Hover**: Elevación + sombra + cambio de color de borde
- **Transiciones**: 150-200ms para fluidez

### Responsive
- **Mobile-first**: Diseño optimizado primero para móviles
- **Breakpoint**: 768px para tablet/desktop
- **Max-width**: 2xl (672px) para contenido, evita que se vea vacío en desktop

## 📱 Compatibilidad

- ✅ Chrome/Edge (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ iOS Safari
- ✅ Chrome Mobile

## 🔧 Troubleshooting

### Las rutas no funcionan en GitHub Pages

Si estás usando un subpath (sin dominio personalizado):
1. Verifica que `base` en `vite.config.js` sea `/nombre-repo/`
2. Asegúrate de que las rutas en `src/App.jsx` sean relativas

### Los iconos no se muestran

Verifica que el nombre del icono en `profiles.json` coincida con un icono de [Lucide React](https://lucide.dev/). Los nombres son case-sensitive.

### Las animaciones no funcionan

Verifica que `framer-motion` esté instalado correctamente:
```bash
npm install framer-motion
```

## 📄 Licencia

Uso personal - Todos los derechos reservados.

---

**Creado con enfoque en simplicidad, profesionalismo y usabilidad premium.**
