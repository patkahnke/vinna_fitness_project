var express = require('express');
var router = express.Router();
var pg = require('pg');
var connection = require('../modules/connection');
var pdfGenerator = require('../modules/generatePdf');
var PDFDocument = require('pdfkit');
var fs = require('fs');
var moment = require('moment');
var Applicant = require('../modules/applicant');
var JobCriteria = require('../modules/jobCriteria');





router.get('/', function(req, res){


  //Pat's Dummy Data



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


















//   var applicant = {
//     deepSquat: 2,
//     hurdleStepLeft: 2,
//     hurdleStepRight: 2,
//     inlineLungeLeft: 2,
//     inlineLungeRight: 2,
//     shoulderMobLeftTop: 18,
//     shoulderMobRightTop: 22,
//     shoulderMobLeft: 2,
//     shoulderMobRight: 2,
//     activeStraightLegRaiseLeft: 2,
//     activeStraightLegRaiseRight: 2,
//     trunkStabilityPushup: 2,
//     rotaryStabilityLeft: 2,
//     rotaryStabilityRight: 2,
//     hurdleStepTotal: 2,
//     inlineLungeTotal: 2,
//     shoulderMobTotal: 2,
//     activeStraightLegRaiseTotal: 2,
//     rotaryStabilityTotal: 2,
//     totalHighRiskAreas: 2,
//     compositeScore: 2,
//     totalZerosAndOnes: 2,
//     totalAsymmetries: 2,
//     passCompositeScore: false,
//     minCompositeScore: 12
// }
//
//
//    applicant.applicantName = "name";
//    applicant.applicantAge = "age";
//    applicant.location = "SSP";
//    applicant.jobTitle = "Detailer";
//    applicant.company = "Fury";
//    applicant.age = "22";
//    applicant.height = "75";
//    applicant.weight = "177";
//    applicant.gender = "M";
//    applicant.score = "14";
//    applicant.subTests = [
//      subTestOne = {
//        excerciseArray: ['deepSquat', 'inlineLunge'],
//        minScore: 3
//      },
//      subTestTwo = {
//        excerciseArray: ['Straight Leg Raise', 'Rotary Stability Quadraped'],
//        minScore: 3,
//      },
//      subTestThree = {
//        excerciseArray: ['shoulder Mobility'],
//        minScore: 3,
//      }
//    ];
//
console.log(applicant);
  pdfGenerator(applicant);


})





module.exports = router;
