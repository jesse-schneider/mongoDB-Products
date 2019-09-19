module.exports = function (database) {
    const collection = database.collection('products');
    collection.find({}).toArray((err, data) => {
      console.log(data);
  });
}