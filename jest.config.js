module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!(@storybook/.*\\.vue$))"],
  moduleFileExtensions: ["vue", "js", "jsx", "json", "node"],
};
