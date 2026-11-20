/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        asphalt: '#0c0b0a',
        'warm-charcoal': '#121110',
        'card-umber': '#171614',
        'card-lift': '#1e1c1a',
        'paper-ink': '#f3efe9',
        'warm-stone': '#b8b0a6',
        'dust-mute': '#8a837a',
        'forge-copper': '#d4894c',
        'signal-teal': '#2a9b8f',
        'production-green': '#3dba8a',
        'concept-amber': '#e0a84a',
        'personal-lilac': '#8b7ec8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        content: '1120px',
      },
    },
  },
  plugins: [],
};
