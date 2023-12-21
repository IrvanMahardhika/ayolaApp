module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/jest.setup.js'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|@react-navigation|react-native-splash-screen|))',
  ],
  testMatch: ['**/__tests__/**/?(*.)+(spec|test).[jt]s?(x)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!**/__mocks__/**',
    '!**/__tests__/**',
    '!**/styles/**',
    '!**/types/**',
    '!**/*.styles.ts',
    '!App.tsx',
  ],
  rootDir: './',
  coverageReporters: ['lcov', 'text'],
  coverageThreshold: {
    global: {
      // TODO: Increase thresholds as we increase coverage
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};
