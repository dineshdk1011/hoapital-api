var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var smsTemplateSchema = new Schema({
  name: String,
  content: String,
  date:String
});

module.exports = mongoose.model("smsTemplate", smsTemplateSchema);
