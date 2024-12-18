var path = require('path');
var webpack = require('webpack');
var env = require('./environment');

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
				? []
				: [new webpack.HotModuleReplacementPlugin()];

module.exports = {
  devtool: 'source-map',
  entry: entry,
	plugins: plugins,
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/
    }]
  },
  output: {
    filename: 'bundle.js',
    publicPath: '/dist/',
    path: path.join(__dirname, 'dist')
  }
};
