const HtmlWebpackPlugin  = require( 'html-webpack-plugin' );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );

module.exports = {
	output: {
		filename: '[name].[hash].js',
	},

	plugins: [
		new HtmlWebpackPlugin({ template: 'src/index.html', filename: 'index.html' }),
		new CleanWebpackPlugin([ 'dist' ]),
	],

	resolve: {
		alias: {
			modules:    `${ __dirname }/node_modules`,
			assets:     `${ __dirname }/src/assets`,
			containers: `${ __dirname }/src/containers`,
			components: `${ __dirname }/src/components`,
		},
	},

	module: {
		rules: [{
			test:    /\.js$/,
			exclude: /node_modules/,
			use:     'babel-loader',
		}, {
			test:    /\.css$/,
			exclude: /node_modules/,
			use:     [ 'style-loader', 'css-loader', 'sass-loader?includePaths[]=src' ],
		}, {
			test:    /\.(jpe?g|png)$/,
			exclude: /node_modules/,
			use:     `url-loader?limit=8192&context=${ __dirname }/src&name=[path][name].[hash].[ext]`,
		}, {
			test:    /\.svg$/,
			exclude: /node_modules/,
			use:     'svg-inline-loader',
		}],
	},
};
