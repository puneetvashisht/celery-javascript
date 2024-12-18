var path = require('path');
var webpack = require('webpack');
var env = require('./environment');

// moves every require("style.css") in entry chunks into a separate css output file. So your styles are no longer inlined into the javascript,
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var DEVELOPMENT = env.DEVELOPMENT;
var PRODUCTION = env.PRODUCTION;

var entry = PRODUCTION
				? ['./app/index.js']
				: [
            './app/index.js',
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:8080'
        ];
				
var plugins = PRODUCTION
				? [
          new webpack.optimize.UglifyJsPlugin(),
          new ExtractTextPlugin('styles.css')
        ]
				: [new webpack.HotModuleReplacementPlugin()];

const cssIdentifier = PRODUCTION 
	? '[hash:base64:15]'
	: '[path][name]---[local]' ;

const cssLoader = PRODUCTION 
	? ExtractTextPlugin.extract({
		use: 'css-loader?localIdentName='+cssIdentifier
	})
	: ['style-loader', 'css-loader?localIdentName='+cssIdentifier];

const devtool = PRODUCTION ? '' : 'source-map';

module.exports = {
  devtool: devtool,
  entry: entry,
	plugins: plugins,
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/
    },
    {
      test: /\.(jpg|png|gif)$/,
      // loaders: ['file-loader'],
      loaders: ['url-loader?limit=10000&name=images/[hash:20].[ext]'],
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      loaders: cssLoader,
      exclude: /node_modules/
    }]
  },
  output: {
    filename: 'bundle.js',
    publicPath: '/dist/',
    path: path.join(__dirname, 'dist')
  }
};
