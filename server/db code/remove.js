module.exports = function (database, app, ObjectID) {

  //api route to add a product
  app.post('/api/delete', (req, res) => {
    if (!req.body) {
      return res.sendStatus(400);
    }

    productID = req.body.productid;
    var objectid = new ObjectID(productID);
    const collection = database.collection('products');

    collection.deleteOne({_id: objectid}, (err, docs) => {
        collection.find({}).toArray((err, data) => {
            res.send(data);
        });
    });
  });
}