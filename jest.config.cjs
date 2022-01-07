/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  testMatch: ['<rootDir>/src/**/*.test.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '^.+\\.svelte$': 'svelte-jester'
  },
  moduleNameMapper: {
    '^\\$lib(.*)$': '<rootDir>/src/lib$1',
    '^\\$app(.*)$': [
      '<rootDir>/.svelte-kit/dev/runtime/app$1',
      '<rootDir>/.svelte-kit/build/runtime/app$1'
    ]
  },

  extensionsToTreatAsEsm: ['.svelte'],
  moduleFileExtensions: ['ts', 'js', 'svelte'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect']
};
