module.exports = {
  testEnvironment: "jsdom",

  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },

  moduleFileExtensions: ["ts", "tsx", "js"],

  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy"
  }
};
