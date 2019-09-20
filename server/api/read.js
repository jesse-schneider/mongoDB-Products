var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var mongodb = require('mongodb');


exports.find = function (req, res) {
  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) throw err;
    let db = client.db("mydb");
    db.collection("products").find({}).toArray().then((docs) => {
      console.log("Found the following records");
      console.log(docs);
      res.send(docs);
    }).catch((err) => { console.log(err); }).finally(() => { client.close(); });
  });
};