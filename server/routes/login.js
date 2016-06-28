var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');

router.get('/login',
  passport.authenticate('google', { scope:
    [ 'openid', 'email' ] }
));

router.get( '/callback',
    passport.authenticate( 'google', {
        successRedirect: '/trainer',
        failureRedirect: '/auth/google/failure'
}));

router.get('/', function (req, res) {
  if (req.isAuthenticated()) {
    console.log(req.user);
    res.json({ name: req.user.name, admin: req.user.admin});
  } else {
    res.json({ status: false });
  }

});

router.get('/logout', function (req, res) {
  req.logout();
  res.sendStatus(200); // they made it!
});

module.exports = router;
