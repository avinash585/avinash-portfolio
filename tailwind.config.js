/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        command: {
          bg: '#0B0F19',
          primary: '#00E5FF',
          secondary: '#7B61FF',
          ink: '#FFFFFF',
          panel: 'rgba(15, 23, 42, 0.68)',
          line: 'rgba(148, 163, 184, 0.22)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 38px rgba(0, 229, 255, 0.22)',
        violet: '0 0 42px rgba(123, 97, 255, 0.2)',
      },
      backgroundImage: {
        scanline:
          'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
