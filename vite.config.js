/**
 * Configuración de Vite para misenlaces
 * Genera sitio estático compatible con GitHub Pages
 */

import { defineConfig } from 'vite';

export default defineConfig({
  // IMPORTANTE: Cambiar según tu configuración
  // - Con dominio personalizado (misenlaces.joaquin-cabrera.com): base: '/'
  // - Sin dominio (usuario.github.io/misenlaces): base: '/misenlaces/'
  base: '/', // Cambiar a '/misenlaces/' si NO usas dominio personalizado
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    // Optimizaciones para producción (esbuild viene incluido con Vite)
    minify: 'esbuild',
  },
  // Configuración del servidor de desarrollo
  server: {
    port: 3000,
    open: true,
  },
});

