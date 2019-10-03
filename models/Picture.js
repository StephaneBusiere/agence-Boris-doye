var mongoose = require('mongoose');

var pictureSchema = new mongoose.Schema({
  picture_name: String, 
  picture_source: String, 
  picture_description: String
});

var Picture = mongoose.model('Picture', pictureSchema);
module.exports = Picture;