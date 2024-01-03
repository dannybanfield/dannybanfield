/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    container: {
      // center: true,
      // padding: '2rem',
    },	
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          // corporate
          "color-scheme": "light",
          "primary": "#4b6bfb",
          "secondary": "#7b92b2",
          "accent": "#67cba0",
          "neutral": "#181a2a",
          "neutral-content": "#edf2f7",
          "base-100": "#ffffff",
          "base-content": "#181a2a",
          "--rounded-box": "0.25rem",
          "--rounded-btn": "0.25rem",
          "--rounded-badge": "0.125rem",
        },
        dark: {
          // business
          "color-scheme": "dark",
          "primary": "#1C4E80",
          "secondary": "#7C909A",
          "accent": "#EA6947",
          "neutral": "#23282E",
          "base-100": "#202020",
          "info": "#0091D5",
          "success": "#6BB187",
          "warning": "#DBAE59",
          "error": "#AC3E31",
          "--rounded-box": "0.25rem",
          "--rounded-btn": "0.25rem",
          "--rounded-badge": "0.125rem",
        },
        market: {
          "primary": "#2563eb",
          "secondary": "#3b82f6",
          "accent": "#0891b2",
          "neutral": "#78716c",
          "base-100": "#e5e7eb",
          "info": "#0d9488",
          "success": "#16a34a",
          "warning": "#f59e0b",
          "error": "#b91c1c",
        },
      },
      {
        market2: {
          "primary": "#1d4ed8",
          "secondary": "#0ea5e9",
          "accent": "#8b5cf6",
          "neutral": "#2a323c",
          "base-100": "#1d232a",
          "info": "#3abff8",
          "success": "#16a34a",
          "warning": "#d97706",
          "error": "#dc2626",
        },
      },
      // "corporate", "business", "light", "dark",
      // "cupcake", "bumblebee", "emerald", "synthwave", "retro", "cyberpunk",
      // "valentine", "halloween", "garden", "forest", "aqua", "lofi",
      // "pastel", "fantasy", "wireframe", "black", "luxury", "dracula",
    ],
    colors: {
      "success": "#16a34a",
      "warning": "#f59e0b",
      "error": "#b91c1c",
    }
  },
};
