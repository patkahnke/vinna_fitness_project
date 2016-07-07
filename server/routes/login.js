var express = require('express');
var router = express.Router();
var passport = require('../auth/passport');
var path = require('path');
var auth = require('../utils/auth');

router.get('/login',
  passport.authenticate('google', { scope:
    [ 'openid', 'email'] }
));

router.get( '/callback',
    passport.authenticate( 'google', {
        successRedirect: '/#/user',
        failureRedirect: '/auth/google/failure'
}));

router.get('/', function (req, res) {
  console.log("HERE - user: " , req.user);
  if (req.isAuthenticated()) {
    console.log('authenticated ', req.user);
    res.json({ name: req.user.name, admin: req.user.admin, id: req.user.id});
  } else {
    res.json({ status: false });
  }

});

router.get('/logout', function (req, res) {
  req.logout();
  res.sendStatus(200); // they made it!
});

module.exports = router;
