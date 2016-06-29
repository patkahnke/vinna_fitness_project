var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = require('../modules/connection');


router.get('/', function(req, res) {
    pg.connect(connectionString, function(err, client, done) {
        if (err) {
            res.sendStatus(500);
        }
        client.query("SELECT * FROM job ",
         function(err, result) {
            if (err) {
                console.log(err, "error retrieving existing job from database");
            }
            done();
            // console.log(result);
            res.send(result.rows);
        });
    });
});

router.post('/', function (req, res) {
  var company = req.body;
  pg.connect(connectionString, function (err, client, done) {
    if (err) {
      res.sendStatus(500);
    }

    client.query( 'INSERT INTO company (name, location, email) ' +
                  'VALUES ($1, $2, $3)',
                   [company.name, company.location, company.email],
                 function (err, result) {
                   done();
                   if (err) {
                     res.sendStatus(500);
                     return;
                   }
                   res.sendStatus(201);
        });
    });
});

router.put('/edit/:id', function(req, res) {
    var company = req.body;
     console.log('HERE FOOL', company);
    pg.connect(connectionString, function(err, client, done) {
            if (err) {
                console.log('connection err');
                res.sendStatus(500);
            }
            client.query('UPDATE company ' +
                         'SET name = $1, ' +
                         'location = $2, ' +
                         'email = $3 ' +
                         'WHERE id = $4 ',
                         [company.name, company.location, company.email, company.id],
                function(err, result) {
                    done();
                    if (err) {
                        console.log('put err');
                        res.sendStatus(500);
                        return;
                    }
                    res.sendStatus(204);
                });
    });
});

router.put('/deactivate/:id', function(req, res) {
    var id = req.params.id;
     console.log('DEACTIVATED COMPANY', id);
    pg.connect(connectionString, function(err, client, done) {
            if (err) {
                console.log('connection err');
                res.sendStatus(500);
            }
            client.query('UPDATE company ' +
                         'SET active = $1 ' +
                         'WHERE id = $2 ',
                         [false, id],
                function(err, result) {
                    done();
                    if (err) {
                        console.log('put err');
                        res.sendStatus(500);
                        return;
                    }
                    res.sendStatus(204);
                });
    });
});

router.put('/reactivate/:id', function(req, res) {
    var id = req.params.id;
     console.log('REACTIVATED COMPANY', id);
    pg.connect(connectionString, function(err, client, done) {
            if (err) {
                console.log('connection err');
                res.sendStatus(500);
            }
            client.query('UPDATE company ' +
                         'SET active = $1 ' +
                         'WHERE id = $2 ',
                         [true, id],
                function(err, result) {
                    done();
                    if (err) {
                        console.log('put err');
                        res.sendStatus(500);
                        return;
                    }
                    res.sendStatus(204);
                });
    });
});

module.exports = router;
