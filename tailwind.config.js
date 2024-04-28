/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'divWidth': '720px'
      },
      fontFamily: {
        custom: ['Hanken Grotesk', 'sans-serif']
      },
      colors: {
        'primary': {
          'light-red': {
            'textColor': 'hsl(0, 100%, 67%)',
            'background': 'hsla(0, 100%, 67%, 0.1)',
          },
          'orangey-yellow': {
            'textColor': 'hsl(39, 100%, 56%)',
            'background': 'hsla(39, 100%, 56%, 0.1)',
          }, 
          'green-teal': {
            'textColor': 'hsl(166, 100%, 37%)',
            'background': 'hsla(166, 100%, 37%, 0.1)'
          },
          'cobalt-blue': {
            'textColor': 'hsl(234, 85%, 45%)',
            'background': 'hsla(234, 85%, 45%, 0.1)'
          } 
        },
        'gradients': {
          'light-slate-blue': 'hsl(252, 100%, 67%)',
          'light-royal-blue': 'hsl(241, 81%, 54%)',
          'violet-blue': 'hsla(256, 72%, 46%, 1)',
          'persian-blue': 'hsla(241, 72%, 46%, 0)'
        },
        'neutral': {
          'white': 'hsl(0, 0%, 100%)',
          'pale-blue': 'hsl(221, 100%, 96%)',
          'light-lavender': 'hsl(241, 100%, 89%)',
          'dark-gray-blue': 'hsl(224, 30%, 27%)'
        }
      },
      height: {
        xxl: '500px'
      }
      
    }
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text)-primary-(light-red|orangey-yellow|green-teal|cobalt-blue)-(textColor|background)/
    }
  ]
}

