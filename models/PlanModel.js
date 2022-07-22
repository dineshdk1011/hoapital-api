var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var planSchema = new Schema({
    "service": String,
    "count": String,
    "fee": String,
    "tax": String,
    "discount": String,
    "totalCost": String,
    "date": String,
    "note": String,
    "type": String,
    "patientid": String,
    "invoice": String,
    'clinicid': String,
    'appointemntid': String
});

module.exports = mongoose.model("plan", planSchema);
