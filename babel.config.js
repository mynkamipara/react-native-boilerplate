module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@components': './src/components',
          "@pages": './src/pages',
          "@navigation": './src/navigation',
          "@utils": './src/utils',
          "@api": './src/api',
          "@assets": './src/assets',
          "@stores": './src/stores'
        },
      },
    ],
  ],
};
