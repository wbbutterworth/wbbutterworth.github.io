const style             = require( './source/style.js' );
const autoprefixer      = require( 'autoprefixer' );
const postcssNested     = require( 'postcss-nested' );
const postcssSimpleVars = require( 'postcss-simple-vars' )({ variables: style.variables });
const postcssFunctions  = require( 'postcss-functions' )({ functions: style.functions });

module.exports = {
	plugins: [
		autoprefixer,
		postcssNested,
		postcssSimpleVars,
		postcssFunctions,
	],
};
