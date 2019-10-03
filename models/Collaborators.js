var mongoose = require('mongoose');

var collaboratorSchema = new mongoose.Schema({
  avatar: String, 
  firstname: String, 
  lastname: String, 
  login: String, 
  password: String 
});

var Collaborator = mongoose.model('Collaborator', collaboratorSchema);
module.exports = Collaborator;