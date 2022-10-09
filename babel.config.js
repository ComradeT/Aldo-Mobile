module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['transform-remove-console'], //removing consoles.log from app during release (production) versions
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@api': './src/api',
          '@ui': './src/ui',
          '@constants': './src/constants',
          '@components': './src/components',
          '@layouts': './src/layouts',
          '@hooks': './src/hooks',
          '@navigations': './src/navigations',
          '@routes': './src/navigations/routes',
          '@screens': './src/screens',
          '@libs': './src/libs',
          '@services': './src/services',
          '@themes': './src/themes',
        },
      },
    ],
  ],
};
