PDFDocument = require('pdfkit');
fs = require('fs');
moment = require('moment');
doc = new PDFDocument;
function docCreate(applicant){
  applicant.testDate = moment().month() + '/' + moment().date() + '/' + moment().year();

  doc.pipe(fs.createWriteStream('generatePdf.pdf'));


  doc.fontSize(20).text('Initial CES/FMS Screen Report For:', 150, 50);
  doc.fontSize(15).text(applicant.firstName + ' ' + applicant.lastName, 230, 70);
  doc.fontSize(18).text('Date:' + applicant.testDate, 230, 90);
  doc.fontSize(18).text('Company: ' + applicant.jobCriteria.jobName, 30, 110);
  doc.fontSize(14).text('Work Location: ' + applicant.jobCriteria.jobLocation, 30, 130);
  doc.fontSize(14).text('Job Title: '+ applicant.jobCriteria.jobTitle, 350, 110);
  doc.fontSize(14).text('Date of Birth: ' + applicant.dateOfBirth, 30, 150);
  doc.fontSize(14).text('Height: ' + applicant.height + '"', 195, 150);
  doc.fontSize(14).text('Weight: ' + applicant.weight + 'lbs', 300, 150);
  doc.fontSize(14).text('Gender: ' + applicant.gender, 425, 150);
  doc.fontSize(18).text('Composite Movement Score: ' + applicant.jobCriteria.minCompositeScore, 20, 200);
  doc.fontSize(11).text('Scores Range from 0-21, Average is 12.7', 30, 230);
  doc.fontSize(11).text('>= 14 indicates little or no increased risk of injury', 30, 250);
  doc.fontSize(18).text('High Risk Injury Indicators: ', 20, 280);
  doc.fontSize(11).text('0s and 1s on Subtests & Asymmetric Patterning', 30, 310);
  doc.fontSize(11).text('Indicate Imminent Injury Risk to Specific Areas', 30, 330);
  doc.fontSize(18).text('Job Specific Requirements: ', 20, 360);
  doc.fontSize(11).text(applicant.jobName, 130, 380);
  doc.fontSize(11).text('Minnimum Passing Composite Score:   ' + applicant.jobCriteria.minCompositeScore + '   ' + applicant.passCompositeScore(), 20, 400);





  //movement screen section
  doc.fontSize(13).text('Functional Movement Screen Raw Results', 290, 230);
  doc.fontSize(12).text('Test Date: ' + applicant.testDate, 350, 245);
  doc.fontSize(12).text('Deep Squat: ' + applicant.deepSquat, 350, 260);
  doc.fontSize(12).text('Hurdle Step: ' + applicant.hurdleStepTotal(), 350, 275);
  doc.fontSize(10).text('Left: ' + applicant.hurdleStepLeft, 350, 290);
  doc.fontSize(10).text('Right: ' + applicant.hurdleStepRight, 350, 305);
  doc.fontSize(12).text('Inline Lunge: ' + applicant.inlineLungeTotal(), 350, 320);
  doc.fontSize(10).text('Left: ' + applicant.inlineLungeLeft, 350, 335);
  doc.fontSize(10).text('Right: ' + applicant.inlineLungeRight, 350, 350);
  doc.fontSize(12).text('Shoulder Mobility: ' + applicant.shoulderMobTotal(), 350, 365);
  doc.fontSize(10).text('Left: ' + applicant.shoulderMobLeft, 350, 380);
  doc.fontSize(10).text('Right: ' + applicant.shoulderMobRight, 350, 395);
  doc.fontSize(12).text('Active Straight Leg Raise: ' + applicant.activeStraightLegRaiseTotal(), 350, 410);
  doc.fontSize(10).text('Left: ' + applicant.activeStraightLegRaiseLeft, 350, 425);
  doc.fontSize(10).text('Right: ' + applicant.activeStraightLegRaiseRight, 350, 440);
  doc.fontSize(12).text('Trunk Stability: ' + applicant.trunkStabilityPushup, 350, 455);
  doc.fontSize(12).text('Rotary Stability Quadraped: ' + applicant.rotaryStabilityTotal(), 350, 470);
  doc.fontSize(10).text('Left: ' + applicant.rotaryStabilityLeft, 350, 485);
  doc.fontSize(10).text('Right: ' + applicant.rotaryStabilityRight, 350, 500);
  doc.fontSize(10).text('Total "Fail" (0/1) Scores: ' + applicant.totalZerosAndOnes(), 350, 515);
  doc.fontSize(12).text('Total Asymmetries: ' + applicant.totalAsymmetries(), 350, 530);
  doc.fontSize(13).text('Total High Risk Areas: ' + applicant.totalHighRiskAreas(), 350, 545);
  doc.fontSize(13).text('Composite FMS Score: ' + applicant.compositeScore(), 350, 560);
  doc.end();
}
module.exports = docCreate;
