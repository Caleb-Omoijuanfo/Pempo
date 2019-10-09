//server.js

var app = require('./app');



var port = 5000;

var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
