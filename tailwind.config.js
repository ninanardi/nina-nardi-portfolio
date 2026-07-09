/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui'],
        mono: ['"Chivo Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
