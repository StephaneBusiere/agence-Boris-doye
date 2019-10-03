var mongoose = require('mongoose');

var equipmentSchema = new mongoose.Schema({
  equipment_name: String, 
  equipment_picture: String, 
  equipment_description: String 
});

var Equipment = mongoose.model('Equipment', equipmentSchema);
module.exports = Equipment;