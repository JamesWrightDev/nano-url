module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.vue',
  ],
  theme: {
    extend: {
      animation: {
        'enterExit': 'enterExit 1s ease',
      },
      keyframes:{
        enterExit: {
          '0%': { transform: 'translateY(-50%)' , opacity: 0},
          '100%': { transform: 'translateY(0%)', opacity: 1 },
        }
      }
    },
  },
  variants: {},
  plugins: [],
}
