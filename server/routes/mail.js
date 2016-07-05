var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = require('../modules/connection');
var nodemailer = require('nodemailer');

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
                       to: 'vinnatest@gmail.com', // list of receivers
                       subject: 'Hello ✔', // Subject line
                       text: 'Hello world 🐴', // plaintext body
                       html: '<b>Hello world 🐴</b>' // html body
                   };

                   // send mail with defined transport object
                   transporter.sendMail(mailOptions, function(error, info){
                       if(error){
                           return console.log(error);
                       }
                   });
                   res.sendStatus(201);
        });
    });
});

module.exports = router;
