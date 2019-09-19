module.exports = function (database, app, ObjectID) {
  //api route to get a single product by ID
  app.post('/api/getitem', (req, res) => {

    var product = req.body;
    var objID = new ObjectID(product.productid);
    const collection = database.collection('products');
    collection.findOne({_id: objID}, (err, data) => {
      res.send(data);
    });
  });
}