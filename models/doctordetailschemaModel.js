var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var doctordetailschemaSchema = new Schema({
	'detailtypeid' : Number,
	'title' : String,
	'description' : String,
	'detail' : Array,
	'doctorid' : Number,
	'clinicid' : Number,
	'createdat' : Date,
	'createdby' : Number,
	'modifiedby' : Number,
	'modifiedat' : Date,
	'id' : String,
	'status' : String
});

module.exports = mongoose.model('doctordetailschema', doctordetailschemaSchema);
