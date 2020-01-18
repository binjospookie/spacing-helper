module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  "coverageThreshold": {
    "global": {
      "statements": 100
    }
  },
  "reporters": [
    "jest-nyan-reporter"
  ]
};
