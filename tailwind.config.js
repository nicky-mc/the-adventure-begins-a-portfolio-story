/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: '#f9f4e7',
        ink: '#2b2b2b',
        primary: '#FFD700',
        secondary: '#8B0000',
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
  ],
  daisyui: {
    themes: [
      {
        fantasy: {
          primary: '#FFD700',
          secondary: '#8B0000',
          accent: '#4B0082',
          neutral: '#F5F5DC',
          'base-100': '#FFF8DC',
          info: '#87CEEB',
          success: '#228B22',
          warning: '#DAA520',
          error: '#8B0000',
        },
      },
    ],
  },
};