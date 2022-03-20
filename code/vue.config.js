/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, '../pages'),
  publicPath: '',
  devServer: {
    disableHostCheck: true,
  }
};
