var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var mongodb = require('mongodb');

exports.insert = function (req, res) {
  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) throw err;
    var db = client.db("mydb"); 
    var product = req.body
    db.collection("products").insertOne(product, function (err, result) {
      console.log("Inserted the following document into the collection:");
      console.log(product);
      res.send(product);
      client.close();
    });
  });
};
