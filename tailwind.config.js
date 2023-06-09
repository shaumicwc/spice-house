/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'height-md': '85vh',
        'height-sm' : '45vh'
      },
      colors: {
        'btn-color': '#F9A51A',
        "blog-qst-color": '#ef4444',
        'blog-ans-color' : "#047857;"
      },
      fontFamily: {
        'blog-qus-font-family': 'monospace',
        'blog-qst-font-family' : 'sans-serif' 
      },
      brightness: {
        '65' : '65%'
      },
      transitionDuration: {
        '2000' : '2s'
      }
    }
  },
  variants: {
    brightness: ['responsive'],
  },
  daisyui: {
    themes: ['lofi'],
  },
  plugins: [require('daisyui')],
}