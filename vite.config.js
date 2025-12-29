/**
 * Configuración de Vite para misenlaces
 * Genera sitio estático compatible con GitHub Pages
 */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: Cambiar según tu configuración
  // - Con dominio personalizado (misenlaces.joaquin-cabrera.com): base: '/'
  // - Sin dominio (usuario.github.io/misenlaces): base: '/misenlaces/'
  base: '/', // Cambiar a '/misenlaces/' si NO usas dominio personalizado
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    minify: 'esbuild',
  },
  server: {
    port: 3000,
    open: true,
  },
});

