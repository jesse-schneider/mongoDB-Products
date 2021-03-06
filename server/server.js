const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const http = require('http').Server(app);
const cors = require('cors');

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017'; //localhost DB url
const dbName = 'mydb'; //Database name
const collectionName = 'product'; //collection name
const ObjectID = require('mongodb').ObjectID; // able to use the ObjectID functionality

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(url, {poolSize:10, useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
    if(err) {
        return console.log("failed to connect to Database... ", err);
    }

    console.log("Successfully connect to the Database...");
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    require('./db code/add.js')(db, app);
    require('./db code/remove.js')(db, app, ObjectID);
    require('./db code/update.js')(db, app, ObjectID);
    require('./db code/readItem.js')(db, app, ObjectID);
    require('./db code/read.js')(db, app);
    client.close();
});


let server = http.listen(3000, () => {
  let host = server.address().address;
  let port = server.address().port;
  console.log("Server listening on " + host + " port: " + port);
});