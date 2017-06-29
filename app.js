var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var debug = require('debug')('comicstock');
var methodOverride = require('method-override'); 

debug('starting up...')
var app = express();
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
debug('setting up logger');
app.use(logger('dev'));
debug('setting up parsers');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(methodOverride());
debug('setting up static resources')
app.use(express.static(path.join(__dirname, 'public')));
app.use('/scripts', express.static(path.join(__dirname, '/scripts')));
app.use('/scripts/jquery', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.use('/scripts/angular', express.static(path.join(__dirname, '/node_modules/angular')));
app.use('/scripts/angular-resource', express.static(path.join(__dirname, '/node_modules/angular-resource')));
app.use('/scripts/angular-route', express.static(path.join(__dirname, '/node_modules/angular-route')));
app.use('/scripts/bootstrap', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/scripts/angular-ui-bootstrap', express.static(path.join(__dirname, '/node_modules/angular-ui-bootstrap/dist')));
app.use('/scripts/angular-animate', express.static(path.join(__dirname, '/node_modules/angular-animate')));
app.use('/scripts/uirouter', express.static(path.join(__dirname, '/node_modules/@uirouter/angularjs/release')));
app.use('/scripts/angular-ui-router-uib-modal', express.static(path.join(__dirname, '/node_modules/angular-ui-router-uib-modal')))
app.use('/style/bootstrap', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/style/fonts', express.static(path.join(__dirname, '/node_modules/bootstrap/fonts')));
app.use('/style/angular-ui-bootstrap', express.static(path.join(__dirname, '/node_modules/angular-ui-bootstrap/dist')));
app.use('/scripts/oclazyload', express.static(path.join(__dirname, '/node_modules/oclazyload/dist')));
app.use('/scripts/toastr', express.static(path.join(__dirname, '/node_modules/toastr/build')));
app.use('/templates', express.static(path.join(__dirname, '/templates')));
app.use('/fontawesome', express.static(path.join(__dirname, '/node_modules/font-awesome/')));
app.use('/scripts/angular-spinkit', express.static(path.join(__dirname, '/node_modules/angular-spinkit/build')));
app.use('/scripts/camelcase', express.static(path.join(__dirname, '/node_modules/angular-camelcase-to-human')));
debug('setup complete') 

module.exports = app;
