var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var RoleManagemtSchma = new Schema({
    "role": String,
    "clinicid": String,
    "privilege": Array,
});

module.exports = mongoose.model("rolemanagement", RoleManagemtSchma);
