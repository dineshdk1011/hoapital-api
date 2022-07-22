var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var scheduleschemaSchema = new Schema({
	'scheduletypeid' : Number,
	'title' : String,
	'description' : String,
	'reason' : String,
	'procedureid' : Number,
	'starttime' : Date,
	'duration' : Number,
	'startsat' : Date,
	'endsat' : Date,
	'isregular' : Boolean,
	'clinicid' : Number,
	'doctorid' : Number,
	'patientid' : Number,
	'createdat' : Date,
	'createdby' : Number,
	'modifiedby' : Number,
	'modifiedat' : Date,
	'id' : String,
	'status' : String
});

module.exports = mongoose.model('scheduleschema', scheduleschemaSchema);
