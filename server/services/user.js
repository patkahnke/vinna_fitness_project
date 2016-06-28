/**
 * A service layer that makes all of our User database queries.
 *
 * @module services/user
 *
 * @function findUserById finds a User by their unique Mongo id
 * @function findUserByGoogleId finds a User by their Google id
 * @function create a User that will be authenticated by Google
 */
var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require('body-parser');
var connection = require('../modules/connection');
var pg = require('pg');
pg.defaults.ssl = true;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var UserService = {
  findUserById: function (id, callback) {
      var results = [];

      pg.connect(connection, function(err, client, done) {

        var query = client.query('SELECT * FROM staff WHERE id = $1 LIMIT 1', [id]);

        // Stream results back one row at a time
        query.on('row', function(row) {
          results.push(row);
         });
        // close connection
        query.on('end', function (result) {
          done();
          if(result.rowCount == 0){
            return callback(null, null);
          } else {
            console.log('findUserByIdGet', results);
            return callback(null, results[0]);
          }
        });
      });
  },

  findUserByEmail: function (email, callback) {
    var results = [];
    console.log(connection);
    pg.connect(connection, function(err, client, done) {
      var query = client.query('SELECT * FROM staff WHERE email = $1', [email]);

      // Stream results back one row at a time
      query.on('row', function(row) {
        console.log('pushing row');
        results.push(row);
      });

      // close connection
      query.on('end', function (result) {
        console.log('ending query in find by email');
        done();
        if(result.rowCount == 0){
          return callback(null, null);} else {
          return callback(null, results);
        }
      });
    });
  },

  updateUser: function (id, token, name, email, callback) {
    console.log('in updateUser');
    var results = [];
    googleId = id;
    googleToken = token;
    googleName = name;
    googleEmail = email;
    console.log(connection);
      pg.connect(connection, function(err, client, done) {
        console.log('updating new user');
        var query = client.query('UPDATE staff '+
        'SET token = $1'+
        'WHERE email = $2',
          [token, email]);
        // Stream results back one row at a time
        query.on('row', function(row) {
          console.log('pushing row');
          results.push(row);
        });

        // close connection
        query.on('end', function (result) {
          console.log('ending query in update');
          done();
          if(result.rowCount == 0){
            return callback(null, null);} else {
            return callback(null, results);
          }
        });
      });
  }
};

module.exports = UserService;
