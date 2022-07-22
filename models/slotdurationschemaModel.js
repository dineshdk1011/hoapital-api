var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var slotdurationschemaSchema = new Schema({
	'title' : String,
	'duration' : Number,
	'description' : String,
	'createdat' : Date,
	'createdby' : Number,
	'modifiedby' : Number,
	'modifiedat' : Date,
	'id' : String,
	'status' : String
});

module.exports = mongoose.model('slotdurationschema', slotdurationschemaSchema);
