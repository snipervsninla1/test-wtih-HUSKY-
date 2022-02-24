module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'plugin:vue/essential',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'space-before-blocks': 'off',
    'semi-style': 'error',
    'func-name-matching': 'warn',
    'dot-notation': 'warn',
    'comma-style': 'warn',
  },
};
