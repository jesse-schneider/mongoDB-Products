module.exports = function (database) {

    var name = 'Second Prod';
    const collection = database.collection('products');

    collection.deleteOne({name: name});
}