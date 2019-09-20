const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const http = require('http').Server(app);
const cors = require('cors');

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017'; //localhost DB url

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const add = require('./api/add.js');
const read = require('./api/read.js');
const remove = require('./api/remove.js');
const update = require('./api/update.js');
app.post('/api/add', add.insert);
app.get('/api/getall', read.find);
app.post('/api/delete', remove.delete);
app.post('/api/update', update.update);

MongoClient.connect(url, {poolSize:10, useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
    if(err) {
        return console.log("failed to connect to Database... ", err);
    }
    console.log("Successfully connect to the Database...");
    client.close();
});

let server = http.listen(3000, () => {
  let host = server.address().address;
  let port = server.address().port;
  console.log("Server listening on " + host + " port: " + port);
});

module.exports = server;