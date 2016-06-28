PDFDocument = require('pdfkit');
fs = require('fs');
doc = new PDFDocument;
function docCreate(applicant){

  doc.pipe(fs.createWriteStream('generatePdf.pdf'));


  doc.fontSize(20).text('Initial CES/FMS Screen Report For:', 150, 50);
  doc.fontSize(15).text(applicant.applicantName, 230, 70);
  doc.fontSize(18).text('Date Date', 230, 90);
  doc.fontSize(18).text('Company: ' + applicant.company, 50, 110);
  doc.fontSize(14).text('Work Location: ' + applicant.location, 50, 130);
  doc.fontSize(14).text('Job Title: '+ applicant.jobTitle, 350, 110);
  doc.fontSize(14).text('Age: ' + applicant.age, 50, 150);
  doc.fontSize(14).text('Height: ' + applicant.height + '"', 175, 150);
  doc.fontSize(14).text('Weight: ' + applicant.weight + 'lbs', 300, 150);
  doc.fontSize(14).text('Gender: ' + applicant.gender, 425, 150);
  doc.fontSize(20).text('Composite Movement Score: ' + applicant.score, 40, 200);
  doc.fontSize(11).text('Scores Range from 0-21, Average is 12.7', 80, 230);
  doc.fontSize(11).text('>= 14 indicates little or no increased risk of injury', 80, 250);
  doc.fontSize(20).text('High Risk Injury Indicators: ', 40, 280);
  doc.fontSize(11).text('0s and 1s on Subtests & Asymmetric Patterning', 80, 310);
  doc.fontSize(11).text('Indicate Imminent Injury Risk to Specific Areas', 80, 330);
  doc.fontSize(20).text('Job Specific Requirements: ', 40, 360);
  doc.fontSize(11).text(applicant.jobTitle, 150, 380);
  doc.end();
}
module.exports = docCreate;
