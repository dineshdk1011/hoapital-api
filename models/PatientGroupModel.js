var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var PatientGroupSchema = new Schema({
	'title' : String,
	'description' : String,
	'createdat' : Date,
	'createdby' : Number,
	'modifiedat' : Date,
	'modifiedby' : Number,
	'id' : String,
	'status' : String
});

module.exports = mongoose.model('PatientGroup', PatientGroupSchema);
