module.exports = function (database, app, ObjectID) {

  //api route to update a product with new info
  app.post('/api/update', (req, res) => {
    if (!req.body) {
      return res.sendStatus(400);
    }

    product = req.body;
    var objID = new ObjectID(product.objid);
    const collection = database.collection('products');
    collection.updateOne({_id:objID}, {$set:{name:product.name, description: product.description, price: product.price, units: product.units}}, () => {
        res.send({'ok': product.objid});
    });
  });
}