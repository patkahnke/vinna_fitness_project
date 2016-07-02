var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = require('../modules/connection');


router.get('/:id', function(req, res) {
    var id = req.params.id;
    pg.connect(connectionString, function(err, client, done) {
        if (err) {
            res.sendStatus(500);
        }
        client.query('SELECT * FROM job ' +
                     'WHERE company_id = ($1) ' +
                     'ORDER BY id ASC',
                     [id],
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

router.post('/:id', function (req, res) {
  var id = req.params.id;
  var job = req.body;
  pg.connect(connectionString, function (err, client, done) {
    if (err) {
      res.sendStatus(500);
    }

    client.query( 'INSERT INTO job (title, company_id, job_email, ' +
                  'min_deep_squat, min_hurdle_step, min_inline_lunge, ' +
                  'min_shoulder_mob, min_straight_leg, min_rotary_stab, ' +
                  'min_trunk_push_up, min_composite, core_subtest, ' +
                  'shoulder_subtest, low_body_subtest, other_subtest) ' +
                  'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)',
                   [job.title, id, job.email, job.minDeepSquat, job.minHurdleStep, job.minInlineLunge, job.minShoulderMob, job.minActiveStraightLegRaise, job.minRotaryStability, job.minTrunkStabilityPushup, job.compositeScore, job.coreSubtest, job.shoulderSubtest, job.lowerBodySubtest, job.otherSubtest],
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
