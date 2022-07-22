var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AccountsSchema = new Schema({
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
	'bloodgroup': String,
	'role': String,
	'createdby': Number,
	'modifiedby': Number,
	'modifiedat': Date,
	'userid': String,
	'state': String,
	'city': String,
	'pincode': String,
	"about": String,
	"language": String,
    "token":String
});

module.exports = mongoose.model('accounts', AccountsSchema);
