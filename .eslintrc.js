module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'prettier/prettier': ['error', { singleQuote: true }, { usePrettierrc: true }],
        'react-hooks/exhaustive-deps': 'error',
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
      },
      globals: {
        JSX: true,
        NodeJS: true,
        Response: true,
      },
    },
  ],
};
