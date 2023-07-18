/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#e2eaf5',
        'color-primary': '#1c1e1f',
        'bg-violet': '#5731b1',
        'gradient-show-concept':
          'linear-gradient(to bottom, left, #c3e59d, #68b7f0)',
      },
    },
  },
  plugins: [],
});
