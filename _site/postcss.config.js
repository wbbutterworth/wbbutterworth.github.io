const autoprefixer = require('autoprefixer');
const style = require('./source/style.js');
const postcssSimpleVars = require('postcss-simple-vars')({ variables: style.variables });
const postcssFunctions = require('postcss-functions')({ functions: style.functions });
const postcssNested = require('postcss-nested');
const postcssMixins = require('postcss-mixins');
const postcssColorFunction = require('postcss-color-function');

module.exports = {
  plugins: [
    autoprefixer,
    postcssMixins,
    postcssNested,
    postcssSimpleVars,
    postcssFunctions,
    postcssColorFunction,
  ],
};
