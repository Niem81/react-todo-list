var express = require('express');
var path = require('path');
var config = require('../webpack.config.js')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')

var app = express();

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  noInfo:true,
  publicPath: config.output.publicPath}));
// in the previous line we add parameters: noinfo for no displaying output that webapck is doing
app.use(webpackHotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000,
}));

app.use(express.static('./dist'));

app.use('/', function (req, res) {
    res.sendFile(path.resolve('client/index.html'));
});

var port = 3001;

app.listen(port, function(error) {
  if (error) throw error;
  console.log("Express server listening on port", port);
});
