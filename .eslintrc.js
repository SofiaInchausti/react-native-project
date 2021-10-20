module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/no-named-as-default': 0,
    'react/jsx-filename-extension': [0],
    'import/extensions': 'off',
    'one-var': 'off',
    'no-multi-assign': 'off',
    'no-nested-ternary': 'off',
    'global-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/first': 'off',
    'react-native/split-platform-components': 'off',
    'react-native/no-raw-text': 'off',
    'no-use-before-define': ['error', { functions: true, classes: true, variables: false }],
     indent: 'off',
  },
};
