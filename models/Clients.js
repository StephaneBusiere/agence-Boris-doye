var mongoose = require('mongoose');

var clientSchema = new mongoose.Schema({
  logo : String,
  name: String
})

var Client = mongoose.model('Client', clientSchema);
module.exports = Client;