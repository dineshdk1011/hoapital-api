var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var emailTemplateSchema = new Schema({
  name: String,
  content: String,
  date: String
});

module.exports = mongoose.model("emailTemplate", emailTemplateSchema);
