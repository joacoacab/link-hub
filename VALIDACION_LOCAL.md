# 🧪 Guía de Validación Local

## Pasos para Validar el Proyecto Localmente

### 1. Instalar Dependencias

```bash
cd /home/joaco/joaco/proyectos/link-hub
npm install
```

Esto instalará todas las dependencias necesarias:
- React y React DOM
- React Router
- Framer Motion
- TailwindCSS
- Lucide React
- Y todas las devDependencies

### 2. Iniciar Servidor de Desarrollo

```bash
npm run dev
```

El servidor se iniciará en `http://localhost:3000` y se abrirá automáticamente en tu navegador.

### 3. Verificar Rutas

Una vez que el servidor esté corriendo, prueba estas URLs:

- **Home**: `http://localhost:3000/`
  - Debe mostrar el selector de perfiles (Personal y Pro)

- **Perfil Personal**: `http://localhost:3000/personal`
  - Debe mostrar el perfil personal con sus links

- **Perfil Profesional**: `http://localhost:3000/pro`
  - Debe mostrar el perfil profesional con sus links

### 4. Checklist de Validación

#### ✅ Funcionalidad Básica
- [ ] El servidor inicia sin errores
- [ ] La página Home carga correctamente
- [ ] Los links a `/personal` y `/pro` funcionan
- [ ] Las páginas de perfiles cargan correctamente
- [ ] Los botones de links son clickeables y abren en nueva pestaña

#### ✅ Diseño Visual
- [ ] El fondo oscuro con degradado se ve correctamente
- [ ] Los blobs animados en el fondo funcionan
- [ ] Los colores violeta se aplican correctamente
- [ ] Las tarjetas de links tienen el estilo "pill" correcto
- [ ] El avatar se muestra (o placeholder si no existe)

#### ✅ Animaciones
- [ ] Las animaciones de entrada funcionan (stagger effect)
- [ ] Los hover states funcionan en los botones
- [ ] Los efectos de elevación al hover se ven
- [ ] Las transiciones son suaves

#### ✅ Responsive
- [ ] En móvil (dev tools): diseño se adapta correctamente
- [ ] En tablet: layout se ajusta bien
- [ ] En desktop: no se ve vacío, max-width funciona

#### ✅ Accesibilidad
- [ ] Navegación por teclado funciona (Tab)
- [ ] Focus visible se muestra en elementos interactivos
- [ ] Los aria-labels están presentes

#### ✅ Contenido
- [ ] Los datos de `profiles.json` se cargan correctamente
- [ ] Los iconos se muestran (o fallback si no existe)
- [ ] Los links tienen las URLs correctas
- [ ] Las secciones se agrupan correctamente

### 5. Probar Build de Producción

Para validar que el build funciona correctamente:

```bash
# Generar build de producción
npm run build

# Preview del build (simula producción)
npm run preview
```

Esto generará la carpeta `dist/` y abrirá un preview en `http://localhost:4173` (o similar).

### 6. Verificar Errores en Consola

Abre las DevTools del navegador (F12) y verifica:

- **Console**: No debe haber errores en rojo
- **Network**: Los recursos se cargan correctamente
- **Lighthouse** (opcional): Para verificar performance y accesibilidad

### 7. Probar Casos Especiales

#### Sin Avatar
- Si no existe `assets/avatar.jpg`, debe mostrar el placeholder (👤)

#### Iconos Inválidos
- Si un icono en `profiles.json` no existe en Lucide, debe usar el fallback (Link)

#### Links Vacíos
- Verificar que no se rompa si algún link está mal configurado

### 8. Comandos Útiles

```bash
# Ver versión de Node (debe ser 18+)
node --version

# Ver versión de npm
npm --version

# Limpiar node_modules y reinstalar (si hay problemas)
rm -rf node_modules package-lock.json
npm install

# Verificar que todas las dependencias estén instaladas
npm list --depth=0
```

## 🐛 Troubleshooting

### Error: "Cannot find module"
```bash
# Reinstalar dependencias
rm -rf node_modules
npm install
```

### Error: "Port 3000 already in use"
```bash
# Cambiar puerto en vite.config.js o matar el proceso
# En vite.config.js cambiar:
server: {
  port: 3001,  // o otro puerto disponible
}
```

### Error: "TailwindCSS not working"
```bash
# Verificar que postcss.config.js existe
# Verificar que tailwind.config.js existe
# Verificar que index.css importa Tailwind correctamente
```

### Las rutas no funcionan
- Verificar que `BrowserRouter` está en `main.jsx`
- Verificar que las rutas en `App.jsx` están correctas
- En desarrollo, las rutas deberían funcionar sin problemas

### Los estilos no se aplican
- Verificar que `index.css` se importa en `main.jsx`
- Verificar que Tailwind está configurado correctamente
- Verificar que las clases de Tailwind están escritas correctamente

## ✅ Validación Exitosa

Si todo funciona correctamente, deberías ver:

1. ✅ Servidor corriendo sin errores
2. ✅ Páginas cargando correctamente
3. ✅ Diseño premium con tema oscuro y acento violeta
4. ✅ Animaciones suaves funcionando
5. ✅ Responsive funcionando en diferentes tamaños
6. ✅ Build de producción generándose sin errores

## 🚀 Siguiente Paso

Una vez validado localmente, puedes proceder con el deploy siguiendo `DEPLOY.md`.

