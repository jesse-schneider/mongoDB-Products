module.exports = function (database, app, ObjectID) {

  //api route to update a product with new info
  app.post('/api/update', (req, res) => {
    if (!req.body) {
      return res.sendStatus(400);
    }

    var product = req.body;
    var objID = new ObjectID(product.id);

    const collection = database.collection('products');
    collection.updateOne({ _id: objID },
      { $set: {
        name: product.name, 
        description: product.description, 
        price: product.price, 
        units: product.units} }, 
        (err, r) => {
      if(err) throw err;
      console.log("updated successfully");
      res.send({result: objID});
    });
  });
}