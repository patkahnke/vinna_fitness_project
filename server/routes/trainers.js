var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = require('../modules/connection');


router.get('/', function(req, res) {
    pg.connect(connectionString, function(err, client, done) {
        if (err) {
            res.sendStatus(500);
        }
        client.query("SELECT * FROM staff ",
         function(err, result) {
            if (err) {
                console.log(err, "retrieving existing trainers from database error");
            }
            done();
            // console.log(result);
            res.send(result.rows);
        });
    });
});

router.post('/', function (req, res) {
  var staff = req.body;
  pg.connect(connectionString, function (err, client, done) {
    if (err) {
      res.sendStatus(500);
    }

    client.query( 'INSERT INTO staff (name, email, admin) ' +
                  'VALUES ($1, $2, $3)',
                   [staff.name, staff.email, staff.admin],
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
    var trainer = req.body;
     console.log('HERE FOOL', trainer);
    pg.connect(connectionString, function(err, client, done) {
            if (err) {
                console.log('connection err');
                res.sendStatus(500);
            }
            client.query('UPDATE staff ' +
                         'SET name = $1, ' +
                         'email = $2, ' +
                         'admin = $3 ' +
                         'WHERE id = $4 ',
                         [trainer.name, trainer.email, trainer.admin, trainer.id],
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

router.delete('/:id', function(req, res) {
    var id = req.params.id;
     console.log('DELETED TRAINER', id);
    pg.connect(connectionString, function(err, client, done) {
            if (err) {
                console.log('connection err');
                res.sendStatus(500);
            }
            client.query('DELETE FROM staff ' +
                         'WHERE id = $1 ',
                         [id],
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
