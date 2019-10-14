const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: ['airbnb-typescript', 'react-app', 'prettier', 'prettier/react'],
  plugins: ['prettier'],
  rules: {
    '@typescript-eslint/semi': 0,
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    'consistent-return': 0,
    'prettier/prettier': ['error', prettierOptions],
  },
};
