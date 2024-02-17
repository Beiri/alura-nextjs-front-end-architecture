module.exports = {
  "env": {
    "jest/globals": true
  },
  "plugins": ["jest"],
  "extends": [
    "next",
    "eslint:recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended"
  ],
  "rules": {
    "no-console": "error",
  }
}
