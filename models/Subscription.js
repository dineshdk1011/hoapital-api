var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SubscriptionSchema = new Schema({
  "name": String,
  "content": String,
  "validity": String,
});

module.exports = mongoose.model("subscription", SubscriptionSchema);
