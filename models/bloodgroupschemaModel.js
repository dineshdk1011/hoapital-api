var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var bloodgroupschemaSchema = new Schema({
	'title' : String,
	'description' : String,
	'createdat' : Date,
	'createdby' : Number,
	'modifiedby' : Number,
	'modifiedat' : Date,
	'id' : String,
	'status' : String
});

module.exports = mongoose.model('bloodgroupschema', bloodgroupschemaSchema);
