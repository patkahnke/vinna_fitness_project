var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var testObject = {
  firstName: 'pat',
  lastName: 'kahnke',
  dateOfBirth: '10/02/1965',
  height: '70',
  weight: '195',
  gender: 'male',
  medicalHistory: 'perfection',
  handMeasurement: 7.5,
  armMeasurement: 25,
  toeTouch: false,
  deepSquat: 2,
  hurdleStepLeft: 2,
  hurdleStepRight: 1,
  inlineLungeLeft: 3,
  inlineLungeRight: 3,
  shoulderMobLeftTop: 18,
  shoulderMobRightTop: 22,
  shoulderMobLeft: 1,
  shoulderMobRight: 1,
  activeStraightLegRaiseLeft: 2,
  activeStraightLegRaiseRight: 3,
  trunkStabilityPushup: 2,
  rotaryStabilityLeft: 2,
  rotaryStabilityRight: 2,
};

//route variables
var connection = require('./modules/connection');
var Applicant = require('./modules/applicant');
var applicant = new Applicant(testObject);
console.log('applicant', applicant);
console.log(connection);
console.log('hurdleStepTotal', applicant.hurdleStepTotal(), 'inlineLungeTotal', applicant.inlineLungeTotal(),
'shoulderMobTotal', applicant.shoulderMobTotal(), 'activeStraightLegRaiseTotal', applicant.activeStraightLegRaiseTotal(),
'rotaryStabilityTotal', applicant.rotaryStabilityTotal(), 'compositeScore', applicant.compositeScore(),
'totalZerosAndOnes', applicant.totalZerosAndOnes(), 'totalAsymmetries', applicant.totalAsymmetries(), 'totalHighRiskAreas',
applicant.totalHighRiskAreas(), 'deepSquat', applicant.deepSquat, 'trunkStabilityPushup', applicant.trunkStabilityPushup);

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
