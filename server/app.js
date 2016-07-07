require('dotenv').config();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session');
var passport = require('./auth/passport');
var isLoggedIn = require('./utils/auth');

//route variables
var connection = require('./modules/connection');
var companies = require('./routes/companies');
var jobs = require('./routes/jobs');
var trainers = require('./routes/trainers');
var login = require('./routes/login');
var assessmentResults= require('./routes/assessmentResults');
var search = require('./routes/search');





//Pat's Dummy Data
var Applicant = require('./modules/applicant');
var JobCriteria = require('./modules/jobCriteria');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve back static files
app.use(express.static(path.join(__dirname, './public')));

app.use(session({
  secret: process.env.SESSION_SECRET,
  key: 'user',
  resave: 'true',
  saveUninitialized: false,
  cookie: { maxage: 60000, secure: false },
}));

app.use(passport.initialize());
app.use(passport.session());
// Routes
app.use('/login', login);
app.use('/assessmentResults', assessmentResults);
app.use('/companies', companies);
app.use('/jobs', jobs);
app.use('/trainers', trainers);
app.use('/search', search);


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
