module.exports = function (database, app) {

  //api route to get a list of all products
  app.get('/api/getall', (req, res) => {
      const collection = database.collection('products');
      collection.find({}).toArray((err, data) => {
          res.send(data);
      });
  });
}