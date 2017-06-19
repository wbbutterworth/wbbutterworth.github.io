const autoprefixer      = require( 'autoprefixer' );
const style             = require( './src/style.js' );
const postcssSimpleVars = require( 'postcss-simple-vars' )({ variables: style.variables });
const postcssFunctions  = require( 'postcss-functions' )({ functions: style.functions });
const postcssNested     = require( 'postcss-nested' );
const postcssMixins     = require( 'postcss-mixins' );

module.exports = {

  plugins: [

    autoprefixer,
    postcssMixins,
    postcssNested,
    postcssSimpleVars,
    postcssFunctions,

  ],

};
