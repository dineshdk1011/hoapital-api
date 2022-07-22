var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clinicDoctors = new Schema({
	'name': String,
	'firstname': String,
	'lastname': String,
	'middlename': String,
	'phonenumber': String,
	'genderid': String,
	'photo': String,
	'email': String,
	'dob': String,
	'password': String,
	'address': String,
	'age': String,
	'bloodgroup': String,
	'speciality': String,
	'roleid': String,
	'rolename': String,
	'createdby': String,
	'modifiedby': String,
	'modifiedat': Date,
	'userid': String,
	'clinicid': String,
	'status': String,
	'color': String,
	'state': String,
	'city': String,
	'pincode': String,
	"language": String,
	"doctorid": String,
	"cheifdoctor": String,
	"access": Array,
});

module.exports = mongoose.model('clinicDoctors', clinicDoctors);
