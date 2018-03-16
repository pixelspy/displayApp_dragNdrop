const express      = require('express');
const MongoClient  = require('mongodb').MongoClient;
const bodyParser   = require('body-parser');

const app          = express();

const port = 8010;

app.use(bodyParser.urlencoded({ extended: true}));

require('./app/routes')(app, {}); // empty obj because no DB yet
app.listen(port, () => {
  console.log("Connected on port : " + port);
})
