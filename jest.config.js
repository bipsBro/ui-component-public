module.exports = {
  preset: "ts-jest",
  verbose: true,
  bail: 5,
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src"],
  transform: {
    "\\.(ts|tsx)$": "ts-jest"
  },
  // globals: {
  //   "ts-jest": {
  //     babelConfig: true
  //   }
  // },
  testPathIgnorePatterns: ["/node_modules/"],
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  setupFilesAfterEnv: ["<rootDir>/setup/setupTest.ts"]
};
