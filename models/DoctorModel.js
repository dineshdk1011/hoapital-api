var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var DoctorSchema = new Schema({
	'firstname' : String,
	'middlename' : String,
	'lastname' : String,
	'phoneno' : Number,
	'publicno' : Number,
	'genderid' : Number,
	'address' : String,
	'photo' : String,
	'email' : String,
	'dob' : String,
	'age' : Number,
	'bloodgroup' : Number,
	'notifychannelid' : Array,
	'languageid' : Number,
	'headline' : String,
	'profiledetail' : String,
	'specialityid' : Number,
	'superspeciality' : String,
	'mrnnumber' : String,
	'socialmediadetails' : Array,
	'createdat' : Date,
	'createdby' : Number,
	'modifiedat' : Date,
	'modifiedby' : Number,
	'id' : String,
	'status' : String,
	
});

module.exports = mongoose.model('Doctor', DoctorSchema);
