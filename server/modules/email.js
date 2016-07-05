var nodemailer = require('nodemailer');
var moment = require('moment');

function sendEmail (applicant, targetEmail) {
console.log('applicant: ', applicant);
console.log('targetEmail: ', targetEmail);
var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          user: 'vinnatest@gmail.com',
          pass: 'vinnafitness',
      }
  });

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"Vinna Test 👥" <vinnatest@gmail.com>', // sender address
    to: targetEmail, // list of receivers, targetEmail = string parameter
    subject: 'CES/FMS Results', // Subject line
    text: 'Hello world 🐴', // plaintext body
    html: '<head><style>' + '.inline {display: inline;}' + '</style></head>' + '<body>' +
          '<center><b><h1>Initial CES/FMS Screen Report For: ' +  applicant.firstName + ' ' + applicant.lastName + '<h1></b></center>' +
          '<center><h2>Test Date:</h3></center>' +
          '<h3>Work Location: </h3>' +
          '<h3>Job Title: ' + applicant.jobCriteria.jobName + '</h3>' +
          '<h3>Significant Medical History: ' + applicant.medicalHistory + '</h3>' +
          '<h3>DOB: ' + applicant.dateOfBirth + ' ' + 'Height: ' + applicant.height + '"' + ' ' + 'Weight: ' + applicant.weight + 'lbs' + ' ' + 'Gender: ' + applicant.gender + '</h3>' +
          '<h3><u>COMPOSITE MOVEMENT SCORE (scores range from 0-21, average is 12.7): ' + '</u></h3>' + '<h3>' + applicant.compositeScore + '</h3>' +
          '<h3><u>High Injury Risk Indicators (0s and 1s on subtests & asymmetric patterning): ' + '</u></h3>' + '<h3>' + applicant.totalHighRiskAreas() + '</h3>' +
          '<h3><u>Job-Specific Requirements</u></h3>' + '<h3></h3>' +
          '<h3>Minimum Passing Composite Score: ' + applicant.jobCriteria.minCompositeScore + '</h3>' +
          '<h3>Core Subtest Requirement: ' + applicant.passSubtestOne() + '</h3>' +
          '<h3>Subtest Requirement #2: ' + applicant.passSubtestTwo() + '</h3>' +
          '<h3>Subtest Requirement #3: ' + applicant.passSubtestThree() + '</h3>' +
          '<h2 class="inline"><u class="inline">JOB-SPECIFIC OVERALL RESULT: </u></h2>' + '<h2 class="inline">' + applicant.passOverall() + '</h2>' +
          '<h3><u>Raw Results: </u><h3>' +
          '<table border="1">' +
            '<tr>' +
              '<th><b>Deep Squat</b></th>' +
              '<td><b>' + applicant.deepSquat + '</b></td>' +
            '</tr>' +
            '<tr>' +
              '<th><b>Hurdle Step</b></th>' +
              '<td><b>' + applicant.hurdleStepTotal() + '</b></td>' +
            '</tr>' +
            '<tr>' +
              '<th>Left</th>' +
              '<td>' + applicant.hurdleStepLeft + '</td>' +
            '</tr>' +
            '<tr>' +
              '<th>Right</th>' +
              '<td>' + applicant.hurdleStepRight + '</td>' +
            '</tr>' +
            '<tr>' +
              '<th><b>Inline Lunge</b></th>' +
              '<td><b>' + applicant.inlineLungeTotal() + '</b></td>' +
            '</tr>' +
            '<tr>' +
              '<th>Left</th>' +
              '<td>' + applicant.inlineLungeLeft + '</td>' +
            '</tr>' +
            '<tr>' +
              '<th>Right</th>' +
              '<td>' + applicant.inlineLungeRight + '</td>' +
            '</tr>' +
            '<tr>' +
              '<th><b>Shoulder Mobility</b></th>' +
              '<td><b>' + applicant.shoulderMobTotal() + '</b></td>' +
            '</tr>' +
            '<tr>' +
              '<th>Left</th>' +
              '<td>' + applicant.shoulderMobLeft + '</td>' +
            '</tr>' +
            '<tr>' +
              '<th>Right</th>' +
              '<td>' + applicant.shoulderMobRight + '</td>' +
            '</tr>' +
            '<tr>' +
              '<th><b>Active Straight Leg Raise</b></th>' +
              '<td><b>' + applicant.activeStraightLegRaiseTotal() + '</b></td>' +
            '</tr>' +
            '<tr>' +
              '<th>Left</th>' +
              '<td>' + applicant.activeStraightLegRaiseLeft + '</td>' +
            '</tr>' +
            '<tr>' +
              '<th>Right</th>' +
              '<td>' + applicant.activeStraightLegRaiseRight + '</td>' +
            '</tr>' +
            '<tr>' +
              '<th><b>Trunk Stability</b></th>' +
              '<td><b>' + applicant.trunkStabilityPushup + '</b></td>' +
            '</tr>' +
            '<tr>' +
              '<th><b>Rotary Stability Quadruped</b></th>' +
              '<td><b>' + applicant.rotaryStabilityTotal() + '</b></td>' +
            '</tr>' +
            '<tr>' +
              '<th>Left</th>' +
              '<td>' + applicant.rotaryStabilityLeft + '</td>' +
            '</tr>' +
            '<tr>' +
              '<th>Right</th>' +
              '<td>' + applicant.rotaryStabilityRight + '</td>' +
            '</tr>' +
          '</table>' +
          '</body>'// html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
});
}

module.exports = sendEmail;
