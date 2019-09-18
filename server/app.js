const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017'; //localhost DB url
const dbName = 'mydb'; //Database name
const collectionName = 'product'; //collection name
const client = new MongoClient(url);

client.connect((err) => {
    console.log("Successfully connect to the Database...");
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    client.close();
});