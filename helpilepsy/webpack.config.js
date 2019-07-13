/* eslint-env node */
const createExpoWebpackconfigAsync = require("@expo/webpack-config");
const { resolve } = require("path");

module.exports = async function(env, argv) {
  const config = await createExpoWebpackconfigAsync(env, argv);

  config.resolve.alias = {
    ...config.resolve.alias,
    "react-native-datepicker": resolve(
      __dirname,
      "./component/Form/webDatePicker.jsx"
    )
  };

  return config;
};
