// var express = require('express');
// var morgan = require('morgan'); 
// var bodyParser = require('body-parser');

// var app = express();
// app.set('port', (process.env.PORT || 9000));

// app.use('/', express.static(__dirname + '/../dist'));
// app.use('/scripts', express.static(__dirname + '/../node_modules'));

// // app.route('/*').get(function(req, res) { 
// //     return  res.sendFile(__dirname + '/../dist/index.html');
// // });

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(morgan('dev'));

// app.get('/', function(req, res) {
//     res.sendFile(__dirname + '/../dist/index.html');
// });

// app.listen(app.get('port'), function() {
//     console.log('Angular2 fullstack listening on port '+app.get('port'));
// });