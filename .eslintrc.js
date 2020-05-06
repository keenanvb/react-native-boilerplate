// module.exports = {
//   root: true,
//   extends: '@react-native-community',
// };


//disables prettier
module.exports = {
  root: true,
  extends: [
    '@react-native-community/eslint-config',
    'eslint-config-prettier',
  ],
  rules: {
    'prettier/prettier': 0,
  },
};