const path = require('path')
const resolve = arg => path.resolve(__dirname, arg)
const emotionPresetOptions = {}

const emotionBabelPreset = require('@emotion/babel-preset-css-prop').default(
  undefined,
  emotionPresetOptions,
)

module.exports = function() {
  return {
    babel: {
      plugins: [
        [
          'emotion',
          {
            labelFormat: '[filename]--[local]',
          },
        ],
        ...emotionBabelPreset.plugins,
      ],
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
