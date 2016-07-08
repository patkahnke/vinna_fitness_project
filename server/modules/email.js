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
    subject: applicant.firstName + ' ' + applicant.lastName + ' CES/FMS Results', // Subject line
    text: 'CES/FMS Results', // plaintext body
    html: '<center><b><h1 style="margin: 0;">Initial CES/FMS Screen Report For: ' +  applicant.firstName + ' ' + applicant.lastName + '<h1></b></center>' +
          '<center><h2 style="margin: 0;">Test Date: ' + moment().format('MM/DD/YYYY') + '</h2></center>' +
          '<h3>Work Location: ' + applicant.jobTitle + '</h3>' +
          '<h3>Job Title: ' + applicant.jobLocation + '</h3>' +
          '<h3>Age: ' + applicant.age + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 'Height: ' + applicant.height + '"' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 'Weight: ' + applicant.weight + 'lbs' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 'Gender: ' + applicant.gender + '</h3>' +
          '<h3>Significant Medical History: ' + applicant.medicalHistory + '</h3>' +
          '<h3><u>COMPOSITE MOVEMENT SCORE (scores range from 0-21, average is 12.7):</u>' + ' ' + applicant.compositeScore() + '</h3>' +
          '<h3><u>High Injury Risk Indicators (0s and 1s on subtests & asymmetric patterning):</u>' + ' ' + applicant.totalHighRiskAreas() + '</h3>' +
          '<div style=" line-height:50%;"><h3><u>Job-Specific Requirements</u></h3>' +
          '<h3>Minimum Passing Composite Score: ' + applicant.jobCriteria.minCompositeScore + '</h3>' +
          '<h3>Core Subtest Requirement: ' + applicant.passCoreSubtest() + '</h3>' +
          '<h3>Shoulder Subtest Requirement: ' + applicant.passShoulderSubtest() + '</h3>' +
          '<h3>Lower Body/Compound Subtest Requirement: ' + applicant.passLowerBodySubtest() + '</h3></div>' +
          // '<h3>Other Subtest Requirement: ' + applicant.passOtherSubtest() + '</h3></div>' +
          '<h3><u>Raw Results: </u><h3>' +
          '<table style=" background-repeat:no-repeat; width:450px; margin:0;" cellpadding="5px" cellspacing="0" border="1px">' +
            '<tr>' +
              '<th style=" background-color:lightgray;"><b>Deep Squat</b></th>' +
              '<td style=" background-color:lightgray;"><b>' + applicant.deepSquat + '</b></td>' +
            '</tr>' +
            '<tr>' +
              '<th style=" background-color:lightgray;"><b>Hurdle Step</b></th>' +
              '<td style=" background-color:lightgray;"><b>' + applicant.hurdleStepTotal() + '</b></td>' +
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
              '<th style=" background-color:lightgray;"><b>Inline Lunge</b></th>' +
              '<td style=" background-color:lightgray;"><b>' + applicant.inlineLungeTotal() + '</b></td>' +
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
              '<th style=" background-color:lightgray;"><b>Shoulder Mobility</b></th>' +
              '<td style=" background-color:lightgray;"><b>' + applicant.shoulderMobTotal() + '</b></td>' +
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
              '<th style=" background-color:lightgray;"><b>Active Straight Leg Raise</b></th>' +
              '<td style=" background-color:lightgray;"><b>' + applicant.activeStraightLegRaiseTotal() + '</b></td>' +
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
              '<th style=" background-color:lightgray;"><b>Trunk Stability</b></th>' +
              '<td style=" background-color:lightgray;"><b>' + applicant.trunkStabilityPushup + '</b></td>' +
            '</tr>' +
            '<tr>' +
              '<th style=" background-color:lightgray;"><b>Rotary Stability Quadruped</b></th>' +
              '<td style=" background-color:lightgray;"><b>' + applicant.rotaryStabilityTotal() + '</b></td>' +
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
          '<h1><u>JOB-SPECIFIC OVERALL RESULT:</u>' + ' ' + applicant.passOverall() + '</h1>' +
          '<div style=" line-height:50%;"><h3><u>Risk Category: ' + applicant.riskCategory() + '<u></h3>' +
          '<h3>' + applicant.riskMessage() + '</h3></div>' +
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
