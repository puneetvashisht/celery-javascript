var path = require('path');
var webpack = require('webpack');
var env = require('./environment');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HTMLWebpackPlugin = require('html-webpack-plugin');

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
          new ExtractTextPlugin('style-[contenthash:12].css'),
          new HTMLWebpackPlugin({
            template: 'index-template.html'
          })
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
	externals:{
		'jquery': 'jQuery'//externals come from global variables, uninstall from node_modules and add cdn
	},
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
    filename: PRODUCTION ? 'bundle.[hash:12].min.js': 'bundle.js',
    publicPath: PRODUCTION ? '/': '/dist/',
    path: path.join(__dirname, 'dist')
  }
};
