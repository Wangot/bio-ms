
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var orm = require('orm');
var app = express();

//Database connection
app.use(orm.express("mysql://biofrost:biofrost@localhost/biofrost", {}));

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.bodyParser());


// development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}

// Load all routes
require('./routes')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});