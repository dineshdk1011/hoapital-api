var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var pharmacyWhatsapp = new Schema({
  name: String,
  content: String,
  expire: String,
});

module.exports = mongoose.model("PharmacywhatsappTemplate", pharmacyWhatsapp);