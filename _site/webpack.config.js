const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
// const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const path              = require( 'path' );

module.exports = {

  context: `${ __dirname }/src/`,
  entry:   './index.js',

  output: {
    path:     `${ __dirname }/dist`,
    filename: '[name].js',
  },

  resolve: {
    extensions: [ '.js', '.jsx', '.json' ],

    modules: [
      path.resolve( './src' ),
      path.resolve( './node_modules' ),
    ],
  },

  module: {
    loaders: [{

      test:    /\.jsx?$/,
      exclude: /node_modules/,
      use:     [ 'babel-loader' ],

    }, {

      test:    /\.css$/,
      exclude: /node_modules/,

      use: ExtractTextPlugin.extract({
        use: [ 'css-loader', 'postcss-loader' ],
      }),

    }, {

      test:    /\.(jpe?g|png|gif|svg)$/,
      exclude: /node_modules/,
      use:     'file-loader?name=[name].[ext]',

    }],
  },

  plugins: [
    new ExtractTextPlugin( '[name].css' ),
    // new HtmlWebpackPlugin({ template: 'template.html' }),
  ],

};
