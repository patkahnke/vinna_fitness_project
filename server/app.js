require('dotenv').config();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session');
var passport = require('./auth/passport');
var isLoggedIn = require('./utils/auth');

//Routes
var index = require('./routes/index');
var admin = require('./routes/admin');
var trainer = require('./routes/trainer');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve back static files
app.use(express.static(path.join(__dirname, './public')));

// Routes
app.get('/data', function (req, res) {
    res.send({ message: 'hello' });
  });

app.post('/data/:number', function (req, res) {
      res.send(req.params.number);
    });

// Handle index file separately
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './public/views/index.html'));
  });

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
      console.log('Listening on port: ', app.get('port'));
    });
