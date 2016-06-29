var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.post('/', function(req, res) {
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
      //console.log('Message sent: ' + info.response);
      res.send("success!");
  });
});

module.exports = router;
