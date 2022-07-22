var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Addminschema = new Schema({
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
	'role': String,
	'createdby': Number,
	'modifiedby': Number,
	'modifiedat': Date,
	'userid': String,
    "token":String
});

module.exports = mongoose.model('admin', Addminschema);
