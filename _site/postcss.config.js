const style = require('./source/style.js');
const autoprefixer = require('autoprefixer');
const postcssNested = require('postcss-nested');
const postcssFunctions = require('postcss-functions')({ functions: style.functions });
const postcssSimpleVars = require('postcss-simple-vars')({ variables: style.variables });

module.exports = {
  plugins: [
    autoprefixer,
    postcssNested,
    postcssFunctions,
    postcssSimpleVars,
  ],
};
