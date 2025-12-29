/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tema oscuro con acento violeta
        bg: {
          primary: '#0a0614',
          secondary: '#1a0a2e',
          tertiary: '#2d1b4e',
        },
        surface: {
          DEFAULT: 'rgba(45, 27, 78, 0.6)',
          hover: 'rgba(61, 43, 94, 0.8)',
          light: 'rgba(45, 27, 78, 0.4)',
        },
        accent: {
          DEFAULT: '#9333ea',
          hover: '#a855f7',
          light: '#c084fc',
          dark: '#7e22ce',
        },
        text: {
          primary: '#ffffff',
          secondary: '#d4c5e8',
          muted: '#8b7ba8',
        },
        border: {
          DEFAULT: '#4c1d95',
          hover: '#6d28d9',
          light: 'rgba(76, 29, 149, 0.3)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        'pill': '9999px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(147, 51, 234, 0.3)',
        'glow-hover': '0 0 30px rgba(147, 51, 234, 0.5)',
        'card': '0 4px 16px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 8px 32px rgba(0, 0, 0, 0.5)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

