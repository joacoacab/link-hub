# misenlaces

Link hub personal para Joaquín Cabrera - Profesional en Transformación Digital, DevOps e Infraestructura.

**URL:** misenlaces.joaquin-cabrera.com

## 🎯 Objetivo

Sitio web minimalista tipo link hub para uso personal y profesional:
- QR en tarjetas de presentación
- Perfil de Instagram
- Contacto rápido y directo

## ⚡ ¿Por qué Vite?

Vite fue elegido como build tool porque:

- ✅ **Mantiene vanilla JS**: No introduce frameworks innecesarios, solo optimiza el código existente
- ✅ **Desarrollo rápido**: Hot Module Replacement (HMR) instantáneo
- ✅ **Build optimizado**: Minificación, tree-shaking y optimización automática
- ✅ **Zero config**: Funciona out-of-the-box con HTML/CSS/JS
- ✅ **GitHub Pages friendly**: Genera archivos estáticos perfectos para Pages
- ✅ **Deploy automático**: GitHub Actions incluido para CI/CD sin esfuerzo

## 🛠️ Stack Tecnológico

- **Vite** - Build tool moderna y rápida
- **HTML5** semántico y accesible
- **CSS3** con variables custom y diseño mobile-first
- **JavaScript vanilla** (sin frameworks de UI)
- **JSON** como fuente de datos
- Compatible con **GitHub Pages** (deploy automático)

## 📁 Estructura del Proyecto

```
link-hub/
├── index.html              # Estructura principal
├── styles.css              # Estilos y sistema de diseño
├── script.js               # Lógica de carga de enlaces
├── links.json              # Fuente de verdad de los enlaces
├── assets/                 # Recursos estáticos
│   └── avatar.jpg          # Foto de perfil (agregar manualmente)
├── package.json            # Dependencias y scripts
├── vite.config.js          # Configuración de Vite
├── .github/workflows/      # GitHub Actions para deploy automático
│   └── deploy.yml
└── README.md               # Este archivo
```

## 🎨 Decisiones de Diseño

### Paleta de Colores
- **Tema oscuro con base violeta (#1a0a2e)**: Fondo profundo y elegante que transmite creatividad y profesionalismo
- **Violeta vibrante (#9333ea)**: Color principal de acento, usado en elementos interactivos y hover states
- **Amarillo dorado (#fbbf24)**: Acento secundario para elementos prioritarios (tarjeta principal, avatar hover)
- **Blanco (#ffffff)**: Texto principal con máximo contraste
- **Lavanda claro (#d4c5e8)**: Texto secundario para jerarquía visual
- **Superficies violetas**: Tonos medios (#2d1b4e, #3d2b5e) para tarjetas y elementos interactivos

### Tipografía
- **System fonts**: Uso de fuentes del sistema para máxima compatibilidad y rendimiento
- **Tamaños escalables**: Base de 16px con escala modular para diferentes dispositivos
- **Pesos moderados**: 400 (regular) y 600 (semi-bold) para mantener legibilidad sin ser pesado

### Componentes

#### Tarjetas de Enlaces
- **Tamaño generoso**: Padding amplio (1.5rem - 2rem) para facilitar el click en móviles
- **Jerarquía visual**: 
  - **Primary**: Borde acentuado (WhatsApp) - máximo contraste
  - **Secondary**: Estilo estándar (LinkedIn, Instagram, etc.)
  - **Tertiary**: Opacidad reducida (GitHub) - menos prominente
- **Microinteracciones sutiles**:
  - Hover: Elevación ligera (-2px) y cambio de color de borde
  - Efecto de brillo sutil al pasar el mouse
  - Flecha que se desplaza al hover

#### Header
- **Avatar circular**: 100px (móvil) / 120px (desktop) con borde sutil
- **Nombre prominente**: 2rem (móvil) / 2.5rem (desktop)
- **Tagline descriptivo**: Color secundario para jerarquía

### Responsive Design
- **Mobile-first**: Diseño optimizado primero para móviles
- **Breakpoint único**: 768px para tablet/desktop
- **Espaciado adaptativo**: Aumenta en pantallas grandes

### Accesibilidad
- **Semántica HTML**: Uso correcto de elementos semánticos
- **ARIA labels**: Etiquetas descriptivas para lectores de pantalla
- **Focus visible**: Outline claro para navegación por teclado
- **Reduced motion**: Respeta preferencias de movimiento reducido

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

## 🚀 Deploy en GitHub Pages

### Opción 1: Deploy Automático (Recomendado)

El proyecto incluye GitHub Actions que despliega automáticamente en cada push a `main`:

1. **Crear repositorio en GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: misenlaces link hub"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/misenlaces.git
   git push -u origin main
   ```

2. **Habilitar GitHub Pages**
   - Ir a Settings > Pages
   - Source: **GitHub Actions** (no "Deploy from a branch")
   - El workflow se ejecutará automáticamente en cada push

3. **Configurar dominio personalizado** (opcional)
   - En Settings > Pages, agregar dominio: `misenlaces.joaquin-cabrera.com`
   - **Importante**: Actualizar `vite.config.js` cambiando `base: '/misenlaces/'` a `base: '/'`
   - Configurar DNS según instrucciones de GitHub

### Opción 2: Deploy Manual

Si prefieres deploy manual:

```bash
# Build del proyecto
npm run build

# La carpeta dist/ contiene los archivos estáticos
# Subir el contenido de dist/ a la rama gh-pages o usar GitHub Pages
```

### Configuración del Base Path

En `vite.config.js`:

- **Con dominio personalizado**: `base: '/'`
- **Sin dominio (subpath)**: `base: '/misenlaces/'` o `base: '/nombre-repo/'`

### Requisitos previos:
- Agregar `assets/avatar.jpg` (foto de perfil, recomendado: 400x400px, formato JPG o PNG)
- Actualizar URLs en `links.json` con tus enlaces reales
- Personalizar tagline en `links.json` si es necesario
- Configurar `base` en `vite.config.js` según tu setup

## 📝 Mantenimiento

### Agregar/Modificar Enlaces

Editar `links.json`:

```json
{
  "id": "nuevo-enlace",
  "title": "Título del Enlace",
  "url": "https://ejemplo.com",
  "icon": "🔗",
  "priority": "secondary",
  "description": "Descripción breve"
}
```

**Prioridades disponibles:**
- `primary`: Máxima visibilidad (borde acentuado)
- `secondary`: Visibilidad estándar
- `tertiary`: Menor visibilidad (opacidad reducida)

### Personalización de Colores

Editar variables CSS en `styles.css`:

```css
:root {
    --color-bg: #0a0a0a;
    --color-accent: #3b82f6;
    /* ... más variables ... */
}
```

## ✅ Checklist Pre-Deploy

- [ ] Agregar `assets/avatar.jpg`
- [ ] Actualizar todas las URLs en `links.json`
- [ ] Verificar tagline en `links.json`
- [ ] Probar en diferentes dispositivos
- [ ] Verificar accesibilidad (navegación por teclado)
- [ ] Configurar dominio personalizado (si aplica)

## 📱 Compatibilidad

- ✅ Chrome/Edge (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ iOS Safari
- ✅ Chrome Mobile

## 📄 Licencia

Uso personal - Todos los derechos reservados.

---

**Creado con enfoque en simplicidad, profesionalismo y usabilidad.**

