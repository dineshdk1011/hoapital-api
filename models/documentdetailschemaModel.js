var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var documentdetailschemaSchema = new Schema({
	'documenttypeid' : Number,
	'title' : String,
	'description' : String,
	'documentdetails' : Array,
	'createdat' : Date,
	'createdby' : Number,
	'modifiedby' : Number,
	'modifiedat' : Date,
	'id' : String,
	'doctorid' : Number,
	'clinicid' : Number,
	'patientid' : Number,
	'status' : String
});

module.exports = mongoose.model('documentdetailschema', documentdetailschemaSchema);
