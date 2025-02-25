const precss = require('precss');
const autoprefixer = require('autoprefixer');
const cssImport = require('postcss-import');
const minify = require('postcss-minify');

module.exports = {
  plugins: [cssImport(), precss(), autoprefixer(), minify()],
};
