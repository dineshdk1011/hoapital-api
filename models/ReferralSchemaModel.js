var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ReferralSchemaSchema = new Schema({
	'title' : String,
	'description' : String,
	'createdat' : Date,
	'createdby' : Number,
	'modifiedby' : Number,
	'modifiedat' : Date,
	'id' : String,
	'informationflag' : Boolean,
	'status' : String
});

module.exports = mongoose.model('ReferralSchema', ReferralSchemaSchema);
