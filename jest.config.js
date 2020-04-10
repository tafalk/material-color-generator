module.exports = {
  transform: {
    "^.+\\.(t|j)sx?$": "ts-jest",
  },
  coverageDirectory: "./coverage/",
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/dist/**",
    "!**/node_modules/**",
    "!**/vendor/**",
  ],
};
