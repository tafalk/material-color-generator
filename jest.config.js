module.exports = {
  transform: {
    "^.+\\.(t|j)sx?$": "ts-jest",
  },
  coverageDirectory: "./coverage/",
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
  ],
};
