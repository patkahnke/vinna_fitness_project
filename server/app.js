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
var trainers = require('./routes/trainers');
var login = require('./routes/login');
var assessmentResults= require('./routes/assessmentResults');



//Pat's Dummy Data
//var Applicant = require('./modules/applicant');
//var JobCriteria = require('./modules/jobCriteria');
// for (var i = 0; i < 4; i++) {
//   for (var j = 0; j < 4; j++) {
//     var testJobData = {
//       jobName: '',
//       minDeepSquat: i,
//       minHurdleStep: i,
//       minInlineLunge: i,
//       minShoulderMob: i,
//       minActiveStraightLegRaise: i,
//       minRotaryStability: i,
//       minTrunkStabilityPushup: i,
//       minCompositeScore: i + 12,
//       maxTotalZerosAndOnes: 5,
//       maxTotalAsymmetries:  5,
//       maxTotalHighRiskAreas: 10 - i,
//       minSubtestOne: {
//         exerciseArray: ['deepSquat', 'inlineLunge'],
//         minScore: 3,
//         description: 'Combined yada yada...',
//       },
//       minSubtestTwo: {
//         exerciseArray: ['activeStraightLegRaise', 'shoulderMobility', 'rotaryStability'],
//         minScore: 7,
//         description: 'Combined yada yada...',
//       },
//       minSubtestThree: {
//         exerciseArray: ['activeStraightLegRaise', 'trunkStabilityPushup', 'rotaryStability', 'hurdleStep'],
//         minScore: 9,
//         description: 'Combined yada yada...',
//       },
//     };
//
//     var testObject = {
//       firstName: 'pat',
//       lastName: 'kahnke',
//       dateOfBirth: '10/02/1965',
//       height: '70',
//       weight: '195',
//       gender: 'male',
//       medicalHistory: 'perfection',
//       handMeasurement: 7.5,
//       armMeasurement: 25,
//       toeTouch: false,
//       deepSquat: j,
//       hurdleStepLeft: j,
//       hurdleStepRight: j,
//       inlineLungeLeft: j,
//       inlineLungeRight: j,
//       shoulderMobLeftTop: 18,
//       shoulderMobRightTop: 22,
//       shoulderMobLeft: j,
//       shoulderMobRight: j,
//       activeStraightLegRaiseLeft: j,
//       activeStraightLegRaiseRight: j,
//       trunkStabilityPushup: j,
//       rotaryStabilityLeft: j,
//       rotaryStabilityRight: j,
// };
//
//     var jobCriteria = new JobCriteria(testJobData);
//     var applicant = new Applicant(testObject, jobCriteria);
//   };
// };



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
app.use('/trainers', trainers);

app.post('/data/:number', function (req, res) {
      res.send(req.params.number);
    });

app.use('/companies', companies);
// Handle index file separately
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './public/views/index.html'));
  });

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
      console.log('Listening on port: ', app.get('port'));
    });
