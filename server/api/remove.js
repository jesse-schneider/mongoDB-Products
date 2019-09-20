var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var mongodb = require('mongodb');
var ObjectID = require('mongodb').ObjectID;

exports.delete = function (req, res) {
  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    let db = client.db("mydb");
    db.collection("products", (err, collection) => {
      let id = ObjectID(req.body.id);
      let query = { _id: id };
      collection.deleteOne(query, (err, result) => {
        console.log("Removed the documents with: ", query);
        res.send(query);
        client.close();
      });
    });
  });
};