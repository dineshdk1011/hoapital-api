var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	'name': String,
	'firstname': String,
	'lastname': String,
	'middlename': String,
	'phonenumber': Number,
	'genderid': String,
	'photo': String,
	'email': String,
	'dob': String,
	'password': String,
	'address': String,
	'age': String,
	'bloodgroup': Number,
	'speciality': String,
	'rolename': String,
	'createdby': Number,
	'modifiedby': Number,
	'modifiedat': Date,
	'userid': String,
	'clinicid': String,
	'status': String,
	'color': String,
	'state': String,
	'city': String,
	'pincode': String,
	'clinicname': String,
	"language": String,
	"referby": String,
});

module.exports = mongoose.model('doctors', UserSchema);
