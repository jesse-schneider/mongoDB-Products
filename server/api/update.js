var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var mongodb = require('mongodb');
var ObjectID = require('mongodb').ObjectID;

exports.update = function (req, res) {
  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    let db = client.db("mydb");
    db.collection("products", (err, collection) => {
      var product = req.body;
      var objID = new ObjectID(product.id);
      collection.updateOne({ _id: objID }, {
         $set: {
           name: product.name,
           description: product.description,
           price: product.price,
           units: product.units
         }
      }, (err, result) => {
        console.log("for the documents with", objID);
        res.send(result);
        client.close();
      });
    });
  });
};