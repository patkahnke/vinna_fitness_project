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
module.exports = router;
