module.exports = {
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: true,
        allowUndefined: true,
      },
    ],
    'babel-plugin-styled-components',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
          '@components': './src/components',
          '@screens': './src/screens',
          '@navigation': './src/navigation',
          '@assets': './src/assets',
          '@lib': './src/lib',
          '@types': './src/types',
          '@hooks': './src/hooks',
        },
      },
    ],
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
