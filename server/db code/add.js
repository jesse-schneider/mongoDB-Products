module.exports = function (database, app) {

        //api route to add a product
        app.post('/api/add', (req, res) => {
            if (!req.body) {
                return res.sendStatus(400);
            }

            product = req.body;
            console.log(product);
            const collection = database.collection('products');
            collection.find({'name': product.name}).count((err, count) => {
                //check for duplicates, if none, insert product into DB
                if(count == 0) {
                    collection.insertOne(product, (err, databaseRes) => {
                        if (err) throw err;
                        let num = databaseRes.insertedCount;

                        res.send({'num': num, err: null});
                    })
                } else {
                    //if duplicate found, return error message
                    res.send({num: 0, err: "duplicate item already exists"});
                }
            });
        });
}