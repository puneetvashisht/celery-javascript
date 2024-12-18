var WebPackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require('./webpack.config.js');
var path = require('path');
var port = 8080;

var compiler = webpack(config);
var server = new WebPackDevServer(compiler, {
	filename: config.output.filename,
	publicPath: config.output.publicPath,
	stats: {
		colors: true
	}
});

server.listen(port, 'localhost', function(){console.log('dev-server is running at '+port);})
