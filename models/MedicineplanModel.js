var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var FeedBack = new Schema({
    name: String,
    medicine: Array,
    medicineid: Array,
});

module.exports = mongoose.model("medicineplantemplate", FeedBack);
