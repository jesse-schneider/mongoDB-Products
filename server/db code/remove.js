module.exports = function (database, app, ObjectID) {

  //api route to add a product
  app.post('/api/delete', (req, res) => {
    if (!req.body) {
      return res.sendStatus(400);
    }

    var objectid = new ObjectID(req.body.id);
    const collection = database.collection('products');

    collection.deleteOne({_id: objectid}, (err, docs) => {
      if (err) throw err;
        collection.find({}).toArray((err, data) => {
            res.send(data);
        });
    });
  });
}