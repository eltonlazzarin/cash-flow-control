module.exports = {
  bail: 1,
  clearMocks: true,
  coverageDirectory: 'coverage',
  collectCoverage: true,
  collectCoverageFrom: ['src/controllers/**/*.js'],
  testEnvironment: 'node',
  coverageReporters: ['text', 'lcov'],
  testMatch: ['**/__tests__/**/*.spec.js']
};
