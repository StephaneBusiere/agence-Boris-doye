var mongoose = require('mongoose');

var professionalDataSchema = new mongoose.Schema({
  professional_name: String, 
  professional_mail: String, 
  professional_phone: Number,
  professional_adress: String, professional_logo: String
});

var ProfessionalData = mongoose.model('Professional Data', professionalDataSchema);
module.exports = ProfessionalData;