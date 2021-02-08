const path = require('path')
const resolve = arg => path.resolve(__dirname, arg)

module.exports = function() {
  return {
    babel: {
      'presets': ['@emotion/babel-preset-css-prop'],
      'plugins': ['@emotion/babel-plugin'],
    },
    webpack: {
      alias: {
        '@': resolve('src'),
      },
    },
    jest: {
      configure: {
        moduleNameMapper: {
          '^@/(.*)$': '<rootDir>/src/$1',
        },
      },
    },
  }
}
