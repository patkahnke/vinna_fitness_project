var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = require('../modules/connection');
var nodemailer = require('nodemailer');
var sendEmail = require('../modules/email');
var Applicant = require('../modules/applicant');
var JobCriteria = require('../modules/jobCriteria');


router.post('/', function (req, res) {
  var assessment = req.body;
  pg.connect(connectionString, function (err, client, done) {
    if (err) {
      res.sendStatus(500);
    }

    client.query( 'INSERT INTO assessment (deep_squat, hurdle_right, hurdle_left, lunge_right, lunge_left, shoulder_top_left, shoulder_top_right, shoulder_left, shoulder_right, leg_raise_right, leg_raise_left, trunk_push_up, rotary_stab_left, rotary_stab_right, hand_inches, shin_inches, trainer_notes, prone_press_up, shoulder_impingement_left, shoulder_impingement_right, lumbar_flexion, toe_touch) ' +
                  'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22)',
                   [assessment.squat, assessment.hurdle.right, assessment.hurdle.left, assessment.lunge.right, assessment.lunge.left, assessment.shoulder.top_left, assessment.shoulder.top_right, assessment.shoulder.left, assessment.shoulder.right, assessment.leg_raise.right, assessment.leg_raise.left, assessment.push_up, assessment.rotary.left, assessment.rotary.right, assessment.hand_measurement, assessment.leg_measurement, assessment.notes, assessment.prone_press_up, assessment.shoulder.left_impingement, assessment.shoulder.right_impingement, assessment.rotary.lumbar_flexion, assessment.toe_touch],
                 function (err, result) {
                   done();
                   if (err) {
                     res.sendStatus(500);
                     return;
                   }

      var testJobData = {
       jobName: 'Fury Motors',
       minDeepSquat: 2,
       minHurdleStep: 2,
       minInlineLunge: 2,
       minShoulderMob: 2,
       minActiveStraightLegRaise: 2,
       minRotaryStability: 2,
       minTrunkStabilityPushup: 2,
       minCompositeScore:  12,
       maxTotalZerosAndOnes: 5,
       maxTotalAsymmetries:  5,
       maxTotalHighRiskAreas: 5,
       minSubtestOne: {
         exerciseArray: ['deepSquat', 'inlineLunge'],
         minScore: 3,
         description: 'Combined yada yada...',
       },
       minSubtestTwo: {
         exerciseArray: ['activeStraightLegRaise', 'shoulderMobility', 'rotaryStability'],
         minScore: 7,
         description: 'Combined yada yada...',
       },
       minSubtestThree: {
         exerciseArray: ['activeStraightLegRaise', 'trunkStabilityPushup', 'rotaryStability', 'hurdleStep'],
         minScore: 9,
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
       armMeasurement: 25,
       legMeasurement: 50,
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


                   var targetEmail = 'vinnatest@gmail.com';
                   sendEmail(applicant, targetEmail);
                   res.sendStatus(201);
        });
    });
});

router.get('/', function (req, res) {
var testJobData = {
 jobName: 'Fury Motors',
 minDeepSquat: 2,
 minHurdleStep: 2,
 minInlineLunge: 2,
 minShoulderMob: 2,
 minActiveStraightLegRaise: 2,
 minRotaryStability: 2,
 minTrunkStabilityPushup: 2,
 minCompositeScore:  12,
 maxTotalZerosAndOnes: 5,
 maxTotalAsymmetries:  5,
 maxTotalHighRiskAreas: 5,
 minSubtestOne: {
   exerciseArray: ['deepSquat', 'inlineLunge'],
   minScore: 3,
   description: 'Combined yada yada...',
 },
 minSubtestTwo: {
   exerciseArray: ['activeStraightLegRaise', 'shoulderMobility', 'rotaryStability'],
   minScore: 7,
   description: 'Combined yada yada...',
 },
 minSubtestThree: {
   exerciseArray: ['activeStraightLegRaise', 'trunkStabilityPushup', 'rotaryStability', 'hurdleStep'],
   minScore: 9,
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
 armMeasurement: 25,
 legMeasurement: 50,
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


             var targetEmail = 'vinnatest@gmail.com';
             sendEmail(applicant, targetEmail);
             res.sendStatus(201);
});

module.exports = router;