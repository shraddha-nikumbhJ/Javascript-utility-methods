export default {
  testEnvironment: "jsdom",

  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },

  moduleFileExtensions: ["ts", "tsx", "js"],

  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy"
  },

  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"]
};
