module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "top-box-bgcolor": "#ffffff",
        "top-box-headingcolor": "#51b4b1",
        "top-box-h2color": "#ccdc76",
        "top-box-paracolor": "#c1c4ca",
        "bottom-lf-boxcolor": "#2bb3b1",
        "bottom-lf-btncolor": "#bfdf32",
        "bottom-rg-boxcolor": "#4abebd"
      },
    },
    container: {
      center: true,
    },

    screens: {
      'sm': { 'min': '1024px', 'max': '1778px' },
      'md': { 'min': '768px', 'max': '1023px' },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
