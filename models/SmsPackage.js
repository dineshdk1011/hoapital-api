var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SmsPackageSchema = new Schema({
  "name": String,
  "content": String,
  "validity": String,
});

module.exports = mongoose.model("smspackage", SmsPackageSchema);
