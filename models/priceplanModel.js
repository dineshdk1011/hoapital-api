var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var pricemodel = new Schema({
    clinicid: String,
    type: String,
    price: String,
    about: String,
});

module.exports = mongoose.model("priceplan", pricemodel);
