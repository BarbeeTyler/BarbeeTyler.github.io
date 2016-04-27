
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);

//NOTE: since this is a front-end Bootstrap demo,
//		no need for jade server templates.  feel
//		free to uncomment and play with the views
//		directory to try out jade.  jade is a neat
//		server side templating engine for HTML
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
//
//NOTE: using front end favicon in index.html
//app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//NOTE: not using jade.  see above and uncomment if you wish
//app.get('/', routes.index);

//NOTE: if you are interested in RESTful API, feel free
//		to play with routes.  The following will list 
//		out some fake users
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
