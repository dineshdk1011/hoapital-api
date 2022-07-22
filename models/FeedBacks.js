var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var FeedBack = new Schema({
  type: String,
  docId: String,
  name: String,
  description: String,
});

module.exports = mongoose.model("complaints", FeedBack);
