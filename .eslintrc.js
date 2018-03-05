module.exports = {
  "extends": "standard",
  "plugins": [
      "standard",
      "promise",
      "html"
  ],
  "globals": {
      "window": true,
      "Vue": true,
      "axios": true
  },
  "rules": {
      "no-unused-vars": ["error", { "varsIgnorePattern": "app" }]
  }
};