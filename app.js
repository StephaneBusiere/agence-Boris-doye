var express = require('espress');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/boris_doye_database');

// nvl application express
var app = express();

console.log('en cours de construction');

app.listen(3000);