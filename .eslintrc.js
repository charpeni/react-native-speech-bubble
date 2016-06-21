module.exports = {
  extends: 'airbnb',
  plugins: [
    'react',
  ],
  parser: 'babel-eslint',
  rules: {
    'no-underscore-dangle': 'off',
    'global-require': 'off',
    'import/no-unresolved': [
      2,
      {
        ignore: [
          '^react$',
          '^react-native$',
          '^react-native/',
        ],
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.android.js',
          '.ios.js',
        ],
      },
    },
    node: true,
  },
};
