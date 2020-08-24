module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.ts',
    './src/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        darkblue: '#2c3e50'
      },
      fontFamily: {
        sans: 'Avenir, Helvetica, Arial, sans-serif'
      },
      boxShadow: {
        local: '0 2px 0 0 currentColor'
      }
    }
  },
  variants: {},
  plugins: []
}
