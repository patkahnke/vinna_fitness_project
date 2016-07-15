var nodemailer = require('nodemailer');
var moment = require('moment');

function sendEmail (applicant, targetEmail) {
console.log('applicant: ', applicant);
console.log('targetEmail: ', targetEmail);
var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          user: 'info@vinnafitness.com',
          pass: '40Exercise',
      }
  });

if(applicant.jobEmail === null){
  applicant.targetEmail = applicant.companyEmail;
} else{
  applicant.targetEmail = applicant.jobEmail;
}


// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"VinnaVel Emailer 👥" <info@vinnafitness.com>', // sender address
    to: applicant.targetEmail, // list of receivers, targetEmail = string parameter
    subject: applicant.firstName + ' ' + applicant.lastName + ' CES/FMS Results', // Subject line
    text: 'CES/FMS Results', // plaintext body
    html: '<center><b><h1 style="margin: 0;">Initial CES/FMS Screen Report For: ' +  applicant.firstName + ' ' + applicant.lastName + '<h1></b></center>' +
          '<center><h2 style="margin: 0;">Test Date: ' + moment().format('MM/DD/YYYY') + '</h2></center>' +
          '<h3>Work Location: ' + applicant.jobLocation + '</h3>' +
          '<h3>Job Title: ' + applicant.jobTitle + '</h3>' +
          '<h3>Age: ' + applicant.age + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 'Height: ' + applicant.height + '"' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 'Weight: ' + applicant.weight + 'lbs' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 'Gender: ' + applicant.gender + '</h3>' +
          '<h3>Significant Medical History: ' + applicant.medicalHistory + '</h3>' +
          '<h3><u>COMPOSITE MOVEMENT SCORE (scores range from 0-21, average is 12.7):</u>' + ' ' + applicant.compositeScore() + '</h3>' +
          '<h3><u>High Injury Risk Indicators (0s and 1s on subtests & asymmetric patterning):</u>' + ' ' + applicant.totalHighRiskAreas() + '</h3>' +
          '<h3><u>Job-Specific Requirements:</u></h3>' +
          '<table style=" background-repeat:no-repeat; width:450px; margin:0;" cellpadding="5px" cellspacing="0" border="1px">' +
            '<tr>' +
              '<th><b>Minimum Passing Composite Score</th></b>' +
              '<td><b><center>' + applicant.jobCriteria.minCompositeScore + '</center></b></td>' +
            '</tr>' +
            '<tr>' +
              '<th><b>Core Subtest Requirement</th></b>' +
              '<td><b><center>' + applicant.passCoreSubtest() + '</center></b></td>' +
            '</tr>' +
            '<tr>' +
              '<th><b>Shoulder Subtest Requirement</th></b>' +
              '<td><b><center>' + applicant.passShoulderSubtest() + '</center></b></td>' +
            '</tr>' +
            '<tr>' +
              '<th><b>Lower Body/Compound Subtest Requirement</th></b>' +
              '<td><b><center>' + applicant.passLowerBodySubtest() + '</center></b></td>' +
            '</tr>' +
            '</table>' +
          // '<h3>Other Subtest Requirement: ' + applicant.passOtherSubtest() + '</h3></div>' +
          '<h3><u>Raw Results: </u><h3>' +
          '<table style=" background-repeat:no-repeat; width:450px; margin:0;" cellpadding="5px" cellspacing="0" border="1px">' +
            '<tr>' +
              '<th style=" background-color:lightgray;"><b>Deep Squat</b></th>' +
              '<td style=" background-color:lightgray;"><b><center>' + applicant.deepSquat + '</center></b></td>' +
            '</tr>' +
            '<tr>' +
              '<th style=" background-color:lightgray;"><b>Hurdle Step</b></th>' +
              '<td style=" background-color:lightgray;"><b><center>' + applicant.hurdleStepTotal() + '</center></b></td>' +
            '</tr>' +
            '<tr>' +
              '<th>Left</th>' +
              '<td><center>' + applicant.hurdleStepLeft + '</center></td>' +
            '</tr>' +
            '<tr>' +
              '<th>Right</th>' +
              '<td><center>' + applicant.hurdleStepRight + '</center></td>' +
            '</tr>' +
            '<tr>' +
              '<th style=" background-color:lightgray;"><b>Inline Lunge</b></th>' +
              '<td style=" background-color:lightgray;"><b><center>' + applicant.inlineLungeTotal() + '</center></b></td>' +
            '</tr>' +
            '<tr>' +
              '<th>Left</th>' +
              '<td><center>' + applicant.inlineLungeLeft + '</center></td>' +
            '</tr>' +
            '<tr>' +
              '<th>Right</th>' +
              '<td><center>' + applicant.inlineLungeRight + '</center></td>' +
            '</tr>' +
            '<tr>' +
              '<th style=" background-color:lightgray;"><b>Shoulder Mobility</b></th>' +
              '<td style=" background-color:lightgray;"><b><center>' + applicant.shoulderMobTotal() + '</center></b></td>' +
            '</tr>' +
            '<tr>' +
              '<th>Left</th>' +
              '<td><center>' + applicant.shoulderMobLeft + '</center></td>' +
            '</tr>' +
            '<tr>' +
              '<th>Right</th>' +
              '<td><center>' + applicant.shoulderMobRight + '</center></td>' +
            '</tr>' +
            '<tr>' +
              '<th style=" background-color:lightgray;"><b>Active Straight Leg Raise</b></th>' +
              '<td style=" background-color:lightgray;"><b><center>' + applicant.activeStraightLegRaiseTotal() + '</center></b></td>' +
            '</tr>' +
            '<tr>' +
              '<th>Left</th>' +
              '<td><center>' + applicant.activeStraightLegRaiseLeft + '</center></td>' +
            '</tr>' +
            '<tr>' +
              '<th>Right</th>' +
              '<td><center>' + applicant.activeStraightLegRaiseRight + '</center></td>' +
            '</tr>' +
            '<tr>' +
              '<th style=" background-color:lightgray;"><b>Trunk Stability</b></th>' +
              '<td style=" background-color:lightgray;"><b><center>' + applicant.trunkStabilityPushup + '</center></b></td>' +
            '</tr>' +
            '<tr>' +
              '<th style=" background-color:lightgray;"><b>Rotary Stability Quadruped</b></th>' +
              '<td style=" background-color:lightgray;"><b><center>' + applicant.rotaryStabilityTotal() + '</center></b></td>' +
            '</tr>' +
            '<tr>' +
              '<th>Left</th>' +
              '<td><center>' + applicant.rotaryStabilityLeft + '</center></td>' +
            '</tr>' +
            '<tr>' +
              '<th>Right</th>' +
              '<td><center>' + applicant.rotaryStabilityRight + '</center></td>' +
            '</tr>' +
          '</table>' +
          '<h1><u>JOB-SPECIFIC OVERALL RESULT:</u>' + ' ' + applicant.passOverall() + '</h1>' +
          '<div style=" line-height:50%;"><h3><u>Risk Category:</u>' + ' ' + applicant.riskCategory() + '</h3></div>' +
          '<h3>' + applicant.riskMessage() + '</h3>' +
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
