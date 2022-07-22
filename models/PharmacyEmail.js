var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var pharmacyEmail = new Schema({
  name: String,
  content: String,
  expire: String,
});

module.exports = mongoose.model("PharmacyEmailTemplate", pharmacyEmail);