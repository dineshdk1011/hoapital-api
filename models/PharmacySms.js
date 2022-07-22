var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var pharmacySms = new Schema({
  name: String,
  content: String,
  expire: String,

});

module.exports = mongoose.model("PharmacysmsTemplate", pharmacySms);