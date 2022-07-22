var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var whatsappTemplateSchema = new Schema({
  name: String,
  content: String,
  date: String
});

module.exports = mongoose.model("whatsappTemplate", whatsappTemplateSchema);
