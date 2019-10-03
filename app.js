const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://oclockteam:oclock2019@borisdoyeproject-yznva.mongodb.net/admin?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


var express = require('express');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/boris_doye_database');

require('./models/Clients');

// nvl application express
var app = express();

console.log('en cours de construction');
