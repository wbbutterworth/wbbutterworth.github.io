const style        = require( './source/style.js' );
const autoprefixer = require( 'autoprefixer' );
const nested       = require( 'postcss-nested' );
const variables    = require( 'postcss-simple-vars' )({ variables: style.variables });
const functions    = require( 'postcss-functions' )({ functions: style.functions });
const color        = require( 'postcss-color-function' );

module.exports = {
	plugins: [
		autoprefixer,
		nested,
		variables,
		functions,
		color,
	],
};
