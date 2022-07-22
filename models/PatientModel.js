var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PatientSchema = new Schema({
	'firstname': String,
	'middlename': String,
	'lastname': String,
	'phonenumber': String,
	'secondarynumber': String,
	'gender': String,
	'address': String,
	'area': String,
	'photo': String,
	'email': String,
	'dob': String,
	'bloodgroup': String,
	'caseid': String,
	'patientgroupid': String,
	'medicalhistoryids': Array,
	'otherhistory': String,
	'occupation': String,
	'age': String,
	'state': String,
	'skypeid': String,
	'languageid': String,
	'referralid': String,
	'referredbyid': String,
	'createdat': Date,
	'createdby': String,
	'modifiedby': String,
	'status': String,
	'patientid': String,
	'password': String,
	'roletype': String,
	'duefees': String,
});

module.exports = mongoose.model('Patient', PatientSchema);
