var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SummarySchema = new Schema({
  clinicid: String,
  doctorid: String,
  patientid: String,
  prescriptionid: String,
  treatmentid: String,
  billvalue:String,
  date:String,
});

module.exports = mongoose.model("summary", SummarySchema);