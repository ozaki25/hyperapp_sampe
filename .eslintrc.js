module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: 'airbnb',
  parser: 'babel-eslint',
  rules: {
    'react/react-in-jsx-scope': [0],
    'no-shadow': [0],
    'react/prop-types': [0],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'max-len': [1, { code: 120 }],
    'react/no-unknown-property': [2, { ignore: 'onclick' }],
    'no-unused-vars': [2, { varsIgnorePattern: 'h' }],
  },
};
