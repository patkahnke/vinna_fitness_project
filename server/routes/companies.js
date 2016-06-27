var express = require('express');
var router = express.Router();
var pg = require('pg');
var connection = require('../modules/connection');


router.get('/', function(req, res) {
    pg.connect(connection, function(err, client, done) {
        if (err) {
            res.sendStatus(500);
        }
        client.query("SELECT * FROM company ",
         function(err, result) {
            if (err) {
                console.log(err, "company database error");
            }
            done();
            // console.log(result);
            res.send(result.rows);

        });
    });

});



module.exports = router;
