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




//Pat's Dummy Data
var Applicant = require('./modules/applicant');
var JobCriteria = require('./modules/jobCriteria');
var testJobData = {
      title: 'buffer',
      email: 'patkahnke@gmail.com',
      location: 'Burnsville',
      minDeepSquat: 2,
      minHurdleStep: 2,
      minInlineLunge: 2,
      minShoulderMob: 2,
      minActiveStraightLegRaise: 1,
      minRotaryStability: 1,
      minTrunkStabilityPushup: 2,
      minCompositeScore: 12,
      minCoreSubtest: {
        exerciseArray: ['activeStraightLegRaise', 'trunkStabilityPushup', 'rotaryStability'],
        minScore: 9,
        description: 'Combined yada yada...',
      },
      minShoulderSubtest: {
        exerciseArray: ['shoulderMob'],
        minScore: 3,
        description: 'Combined yada yada...',
      },
      minLowerBodySubtest: {
        exerciseArray: ['deepSquat'],
        minScore: 3,
        description: 'Combined yada yada...',
      },
      minOtherSubtest: {
        exerciseArray: ['rotaryStability', 'inlineLunge'],
        minScore: 4,
        description: 'Combined yada yada...',
      },
    };

var testObject = {
      firstName: 'pat',
      lastName: 'kahnke',
      dateOfBirth: '10/02/1965',
      height: '70',
      weight: '195',
      gender: 'male',
      medicalHistory: 'perfection',
      handMeasurement: 7.5,
      toeTouch: false,
      deepSquat: 2,
      hurdleStepLeft: 2,
      hurdleStepRight: 2,
      inlineLungeLeft: 2,
      inlineLungeRight: 2,
      shoulderMobLeftTop: 18,
      shoulderMobRightTop: 22,
      shoulderMobLeft: 2,
      shoulderMobRight: 2,
      activeStraightLegRaiseLeft: 2,
      activeStraightLegRaiseRight: 2,
      trunkStabilityPushup: 2,
      rotaryStabilityLeft: 2,
      rotaryStabilityRight: 2,
    };

var jobCriteria = new JobCriteria(testJobData);
var applicant = new Applicant(testObject, jobCriteria);

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
