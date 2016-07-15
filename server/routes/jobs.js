var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = require('../modules/connection');

//retrieve company bound jobs from database
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

//post job specific values/minumums
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
                   [job.title, id, job.email, job.minDeepSquat, job.minHurdleStep, job.minInlineLunge,
                    job.minShoulderMob, job.minActiveStraightLegRaise, job.minRotaryStability,
                    job.minTrunkStabilityPushup, job.compositeScore, job.coreSubtest, job.shoulderSubtest,
                    job.lowerBodySubtest, job.otherSubtest],
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

//update selected job values
router.put('/update/:id', function(req, res) {
    var job = req.body;
    var id = req.params.id;
     //console.log('HERE FOOL', job);
    pg.connect(connectionString, function(err, client, done) {
            if (err) {
                console.log('connection err');
                res.sendStatus(500);
            }
            client.query('UPDATE job ' +
                         'SET title = $1, job_email = $2, ' +
                         'min_deep_squat = $3, min_hurdle_step = $4, min_inline_lunge = $5, ' +
                         'min_shoulder_mob = $6, min_straight_leg = $7, min_rotary_stab = $8, ' +
                         'min_trunk_push_up = $9, min_composite = $10, core_subtest = $11, ' +
                         'shoulder_subtest = $12, low_body_subtest = $13, other_subtest = $14 ' +
                         'WHERE id = $15 ',
                         [job.title, job.job_email, job.minDeepSquat, job.minHurdleStep, job.minInlineLunge,
                          job.minShoulderMob, job.minActiveStraightLegRaise, job.minRotaryStability,
                          job.minTrunkStabilityPushup, job.compositeScore, job.coreSubtest, job.shoulderSubtest,
                          job.lowerBodySubtest, job.otherSubtest, job.id],
                function(err, result) {
                    done();
                    if (err) {
                        console.log(err, 'put err');
                        res.sendStatus(500);
                        return;
                    }
                    res.sendStatus(204);
                });
    });
});

//delete selected job
router.delete('/delete/:id', function(req, res) {
    var id = req.params.id;
     //console.log('DELETING JOB ID :', id);
    pg.connect(connectionString, function(err, client, done) {
            if (err) {
                console.log('connection err');
                res.sendStatus(500);
            }
            client.query('DELETE FROM job ' +
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
