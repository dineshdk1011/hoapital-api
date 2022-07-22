var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var FeedBack = new Schema({
    clinicid: String,
    name: String,
    description: String,
});

module.exports = mongoose.model("instructiontemplate", FeedBack);
