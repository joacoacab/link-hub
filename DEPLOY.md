# Guía de Deploy - Link Hub

## 🚀 Pasos Rápidos para Deploy

### 1. Instalar Dependencias

```bash
npm install
```

### 2. Configurar Base Path

Edita `vite.config.js`:

- **Con dominio personalizado** (ej: `misenlaces.joaquin-cabrera.com`):
  ```js
  base: '/'
  ```

- **Sin dominio personalizado** (ej: `usuario.github.io/misenlaces`):
  ```js
  base: '/misenlaces/'
  ```

### 3. Agregar Assets

Coloca estos archivos en la carpeta `assets/`:

- `avatar.jpg` - Avatar personal (recomendado: 400x400px, formato JPG o PNG)
- `avatar-sirac.jpg` - Avatar profesional (recomendado: 400x400px)
- `og-personal.jpg` - Imagen OpenGraph para perfil personal (opcional, 1200x630px)
- `og-sirac.jpg` - Imagen OpenGraph para perfil profesional (opcional, 1200x630px)

### 4. Personalizar Contenido

Edita `src/data/profiles.json` con tus datos:

- Nombres, handles, bios
- URLs de enlaces
- Iconos (usar nombres de [Lucide React](https://lucide.dev/))
- Configuración SEO

### 5. Probar Localmente

```bash
npm run dev
```

Visita:
- `http://localhost:3000/` - Página de inicio
- `http://localhost:3000/personal` - Perfil personal
- `http://localhost:3000/pro` - Perfil profesional

### 6. Build y Deploy

El workflow de GitHub Actions está configurado para deploy automático.

**Opción A: Deploy Automático (Recomendado)**

1. Haz push a la rama `main`:
   ```bash
   git add .
   git commit -m "Deploy: Link Hub renovado"
   git push origin main
   ```

2. El workflow se ejecutará automáticamente y desplegará en GitHub Pages.

**Opción B: Deploy Manual**

```bash
npm run build
# Sube el contenido de dist/ a tu hosting
```

## ⚠️ Troubleshooting

### Las rutas no funcionan después del deploy

1. Verifica que el `base` en `vite.config.js` coincida con tu configuración de GitHub Pages.
2. Si usas subpath, asegúrate de que sea `/nombre-repo/` (con barra al final).

### Los assets no se cargan

1. Verifica que los archivos estén en `assets/` (no `src/assets/`).
2. Las rutas en `profiles.json` deben empezar con `/assets/`.

### Error al importar JSON

Vite soporta importaciones JSON directas. Si hay problemas:
- Verifica que el archivo `src/data/profiles.json` existe.
- Verifica la sintaxis JSON (sin trailing commas).

## 📝 Checklist Final

- [ ] Dependencias instaladas (`npm install`)
- [ ] Base path configurado en `vite.config.js`
- [ ] Assets agregados en `assets/`
- [ ] Contenido personalizado en `profiles.json`
- [ ] Probado localmente (`npm run dev`)
- [ ] Build funciona (`npm run build`)
- [ ] GitHub Actions configurado (ya está en `.github/workflows/deploy.yml`)
- [ ] GitHub Pages habilitado en Settings > Pages

## 🔗 URLs Esperadas

Después del deploy:

- **Con dominio personalizado**: `https://misenlaces.joaquin-cabrera.com/`
- **Sin dominio**: `https://usuario.github.io/misenlaces/`

Rutas:
- `/` - Home
- `/personal` - Perfil personal
- `/pro` o `/sirac` - Perfil profesional

