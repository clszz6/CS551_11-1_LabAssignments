var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var bodyParser = require("body-parser");
var express = require('express');
var cors = require('cors');
var app = express();
var url = 'mongodb://clszz6:clszz6@ds147233.mlab.com:47233/lab3database';

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


/**
 * This will insert new data into the database
 */
app.post('/insert', function (req, res) {
    MongoClient.connect(url, function(err, client) {
        if(err)
        {
            res.write("Error connecting to the database...");
            res.end();
        }
        insertDocument(client.db('lab3database'), req.body, function() {
            res.write("Database has been updated");
            res.end();
        });
    });
})

var insertDocument = function(db, data, callback) {
    db.collection('lab3').insertOne( data, function(err, result) {
        if(err)
        {
            res.write("Database failed to update");
            res.end();
        }
        console.log("Database has been updated.");
        callback();
    });
};

// TODO:
// Merwan finishes the request
/**
 * This will get all the info from lab3 collection and return it back to the client
 */
app.get('/info', function (req, res) {
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        var cursor = db.collection('lab3').find({"":""});
        cursor.each(function(err,doc) {
            assert.equal(err,null);
            if(doc != null)
            {
                // merwan sends info back up to client
            }
        });
        db.close();
    });
})

/**
 * This will "clear" out the database by removing the database and adding
 * a new one back in with the same name
 */
app.get('/clear', function (req, res) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("lab3database");
        dbo.collection("lab3").drop(function(err, delOK) {
          if (err) throw err;
          if (delOK) console.log("database was cleared");
          db.close();
        });
      });

      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        dbo.createCollection("lab3database", function(err, res) {
          if (err) throw err;
          db.close();
        });
      });
})

var server = app.listen(8081,function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Listening at http://%s:%s", host, port)
})