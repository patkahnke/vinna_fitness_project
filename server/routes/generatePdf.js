var express = require('express');
var router = express.Router();
var pg = require('pg');
var connection = require('../modules/connection');
var pdfGenerator = require('../modules/generatePdf');
var PDFDocument = require('pdfkit');
var fs = require('fs');

router.get('/', function(req, res){
  var applicant = {}
   applicant.applicantName = "name";
   applicant.applicantAge = "age";
   applicant.location = "SSP";
   applicant.jobTitle = "Detailer";
   applicant.company = "Fury";
   applicant.age = "22";
   applicant.height = "75";
   applicant.weight = "177";
   applicant.gender = "M";
   applicant.score = "14";
   applicant.subTests = [
     subTestOne: {
       excerciseArray: ['deepSquat', 'inlineLunge'],
       minScore: 3
     },
     subTestTwo: {
       excerciseArray: ['deepSquat', 'inlineLunge'],
       minScore: 3,
     },
   ]
  pdfGenerator(applicant);


})





module.exports = router;
