//dependencies
var express = require('express');
var router = express.Router();
var pg = require('pg');
var nodemailer = require('nodemailer');
//module routes
var connectionString = require('../modules/connection');
var sendEmail = require('../modules/email');
var Applicant = require('../modules/applicant');
var JobCriteria = require('../modules/jobCriteria');

//"The Golden Thread" FMS Assessment Scores, backend logic, Job Criteria test and post to DB
router.post('/', function (req, res) {
  var assessment = req.body;
  // console.log(assessment);
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
                   //console.log('result',result.rows[0].id);
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
                                  // console.log(applicant);
                                  res.sendStatus(500);
                                  return;
                                }
                                var targetEmail = 'info@vinnafitness.com';
                                  sendEmail(applicant, targetEmail);
                                  res.sendStatus(201);
                              });
                              //^^ second query close
                });
                //^^ first query close
    });
    // ^^^PG close
});
//^^ router close

module.exports = router;
