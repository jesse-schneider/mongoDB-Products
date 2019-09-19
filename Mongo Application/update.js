module.exports = function (database, ObjectID) {

    let prod1Update = {
      id: 001,
      name: "First Prod",
      description: "First product added to the inventory, updated price to 300, units to 10",
      price: 300,
      units: 10
    };
    var objID = new ObjectID('5d8317a3e8841c1574bc98b4');
    const collection = database.collection('products');
    collection.updateOne({
      _id: objID
    }, {
      $set: {
        name: prod1Update.name,
        description: prod1Update.description,
        price: prod1Update.price,
        units: prod1Update.units
      }
    });
    console.log("First Product updated with new data");
}