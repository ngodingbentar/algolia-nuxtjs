module.exports = {
  theme: {
    screens: {
      mobile: { max: '575px' },
      tablet: { max: '767px' },
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    container: {
      center: true
    },
    extend: {
      colors: {
        'bluec': '#1DA1F2',
        'darkblue': '#2795D9',
        'primary': '#5078af',
        'lightblue': '#EFF9FF',
        'dark': '#657786',
        'light': '#AAB8C2',
        'lighter': '#E1E8ED',
        'lightest': '#F5F8FA',
        'bluetweet': 'rgb(29, 161, 242)',
        'darkred': '#d03801',
        'darkone': '#1d2d50'
      }
    },
  },
  // plugins: [
  //   require('@tailwindcss/ui'),
  // ]
};
