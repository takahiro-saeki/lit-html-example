module.exports = {
  "extends": [
    "airbnb-base",
    "prettier",
    "google",
    "eslint:recommended"
  ],
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "modules": true,
      "jsx": true
    }
  },
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": [
      2,
      {
        "singleQuote": true,
        "semi": true
      },
    ],
    "comma-dangle": 0,
    "import/no-unresolved": 1,
    "import/extensions": 1,
    "import/no-extraneous-dependencies": 1
  },
  "settings": {
    "import/resolver": {
      "babel-module": {}
    }
  }
};