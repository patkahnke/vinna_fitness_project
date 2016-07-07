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
  console.log(assessment);
  var jobCriteria = new JobCriteria(assessment.selectedJob);
  var applicant = new Applicant(assessment, jobCriteria);


  pg.connect(connectionString, function (err, client, done) {
    if (err) {
      res.sendStatus(500);
    }
    client.query( 'INSERT INTO applicant (first_name, last_name, age, ' +
                  'height_in, weight, gender, medical_history, job_id) ' +
                  'VALUES ($1, $2, $3, $4, $5, $6, $7, $8) returning id;',
                   [applicant.firstName, applicant.lastName, applicant.age,
                    applicant.height, applicant.weight, applicant.gender,
                    applicant.medicalHistory, assessment.selectedJob.id],
                 function (err, result) {
                   if (err) {
                     console.log('before', err);
                     res.sendStatus(500);
                     return;
                   }
                   console.log('result',result.rows[0].id);
                   client.query('INSERT INTO assessment (applicant_id, staff_id, ' +
                                'deep_squat, hurdle_total, hurdle_left, hurdle_right, ' +
                                'lunge_total, lunge_right, lunge_left, shoulder_total, ' +
                                'shoulder_right, shoulder_left, leg_raise_total, ' +
                                'leg_raise_left, leg_raise_right, trunk_push_up, ' +
                                'rotary_stab_total, rotary_stab_left, rotary_stab_right, ' +
                                'composite_score, total_failures, asyms, high_risk_areas, ' +
                                'trainer_notes, test_pass, high_risk_category) ' +
                                'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, ' +
                                '$13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26)',
                                [result.rows[0].id, assessment.trainerId, applicant.deepSquat,
                                 applicant.hurdleStepTotal(), applicant.hurdleStepLeft, applicant.hurdleStepRight,
                                 applicant.inlineLungeTotal(), applicant.inlineLungeRight, applicant.inlineLungeLeft,
                                 applicant.shoulderMobTotal(), applicant.shoulderMobRight, applicant.shoulderMobLeft,
                                 applicant.activeStraightLegRaiseTotal(), applicant.activeStraightLegRaiseLeft,
                                 applicant.activeStraightLegRaiseRight, applicant.trunkStabilityPushup,
                                 applicant.rotaryStabilityTotal(), applicant.rotaryStabilityLeft, applicant.rotaryStabilityRight,
                                 applicant.compositeScore(), applicant.totalZerosAndOnes(), applicant.totalAsymmetries(),
                                 applicant.totalHighRiskAreas(), assessment.notes, applicant.passOverall(), applicant.riskCategory()],
                              function (err, result){
                                done();
                                if (err) {
                                  console.log('after', err);
                                  console.log(applicant)
                                  res.sendStatus(500);
                                  return;
                                }
                                var targetEmail = 'vinnatest@gmail.com';
                                  sendEmail(applicant, targetEmail);
                                  res.sendStatus(201);
                              });
                });
    });
    // ^^^ PG close
});
//^^ routter close

router.get('/', function (req, res) {
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


             var targetEmail = 'vinnatest@gmail.com';
             sendEmail(applicant, targetEmail);
             res.sendStatus(201);
});


// client.query( 'INSERT INTO assessment (deep_squat, hurdle_right, hurdle_left, lunge_right, lunge_left, shoulder_top_left, shoulder_top_right, shoulder_left, shoulder_right, leg_raise_right, leg_raise_left, trunk_push_up, rotary_stab_left, rotary_stab_right, hand_inches, shin_inches, trainer_notes, prone_press_up, shoulder_impingement_left, shoulder_impingement_right, lumbar_flexion, toe_touch) ' +
//               'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22)',
//                [assessment.squat, assessment.hurdle.right, assessment.hurdle.left, assessment.lunge.right, assessment.lunge.left, assessment.shoulder.top_left, assessment.shoulder.top_right, assessment.shoulder.left, assessment.shoulder.right, assessment.leg_raise.right, assessment.leg_raise.left, assessment.push_up, assessment.rotary.left, assessment.rotary.right, assessment.hand_measurement, assessment.leg_measurement, assessment.notes, assessment.prone_press_up, assessment.shoulder.left_impingement, assessment.shoulder.right_impingement, assessment.rotary.lumbar_flexion, assessment.toe_touch],
//              function (err, result) {
//                done();
//                if (err) {
//                  res.sendStatus(500);
//                  return;
//                }
//
//                var targetEmail = 'vinnatest@gmail.com';
//                sendEmail(applicant, targetEmail);
//                res.sendStatus(201);
//     });
//     // ^^^ insert client query close


module.exports = router;
