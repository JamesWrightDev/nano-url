module.exports = {
    moduleFileExtensions: [
      'js',
      'jsx',
      'json',
      'vue'
    ],
    transform: {
      '^.+\\.vue$': 'vue-jest',
      '^.+\\.js$': 'babel-jest'
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1'
    },
    testMatch: [
      '<rootDir>/(__tests__/*.(js|jsx|ts|tsx))'
    ],
    transformIgnorePatterns: ['<rootDir>/node_modules/']
  }