module.exports = function (database) {
    //create 3 product objects
    let prod1 = {
      id: 001,
      name: "First Prod",
      description: "First product added to the inventory",
      price: 200,
      units: 20
    };
    let prod2 = {
      id: 002,
      name: "Second Prod",
      description: "Second product added to the inventory",
      price: 100,
      units: 20
    };
    let prod3 = {
      id: 003,
      name: "Third Prod",
      description: "Third product added to the inventory",
      price: 300,
      units: 25
    };


    //add the 3 objects to the mongoDB
    const collection = database.collection('products');

    collection.insertOne(prod1, (err, databaseRes) => {
        if (err){
            throw err;
        } else {
            console.log("successfully added product to DB");
        }
    });

    collection.insertOne(prod2, (err, databaseRes) => {
        if (err) {
            throw err;
        } else {
            console.log("successfully added product to DB");
        }
    });

    collection.insertOne(prod3, (err, databaseRes) => {
        if (err) {
            throw err;
        } else {
            console.log("successfully added product to DB");
        }
    });
}