var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var documenttypeschemaSchema = new Schema({
	'title' : String,
	'description' : String,
	'createdat' : Date,
	'createdby' : Number,
	'modifiedby' : Number,
	'modifiedat' : Date,
	'id' : String,
	'validation' : Array,
	'status' : String
});

module.exports = mongoose.model('documenttypeschema', documenttypeschemaSchema);
