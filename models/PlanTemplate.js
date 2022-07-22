var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var FeedBack = new Schema({
  name: String,
  procedure: Array,
  procedureid: Array,
});

module.exports = mongoose.model("plantemplate", FeedBack);
