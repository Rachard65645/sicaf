/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./public/index.html"
];
export const theme = {
  extend: {
    colors: {
      sicaf: {
        coffee: '#5A2D0C',
        darkCoffee: '#3B1F0E',
        canada: '#E11D2E',
        leaf: '#16A34A',
        gold: '#D4AF37',
        light: '#F8F7F4',
      },
      amber: {
        50: '#fffbeb',
        100: '#fef3c7',
        200: '#fde68a',
        300: '#fcd34d',
        400: '#fbbf24',
        500: '#f59e0b',
        600: '#d97706',
        700: '#b45309',
        800: '#92400e',
        900: '#78350f',
        950: '#451a03',
      },
    },
    fontFamily: {
      sans: ['Poppins', 'Roboto', 'ui-sans-serif', 'system-ui'],
    },
    boxShadow: {
      'soft': '0 4px 12px rgba(90, 45, 12, 0.08)',
      'card': '0 10px 25px rgba(90, 45, 12, 0.12)',
      'primary': '0 8px 30px rgba(90, 45, 12, 0.35)',
    },
  },
};
export const plugins = [];