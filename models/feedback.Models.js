var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	'instruction': Array,
	'history': String,
	'cod': String,
	'advice': String,
	'drugname': Array,
	'doss': Array,
	'fequency': Array,
	'complaints': String,
	'time': Array,
	'duration': Array,
	'patientid': String,
	'appointmentid': String,
	'status': String,
	'clinicid': String,
	'doctorid': String,
});

module.exports = mongoose.model('Feedback', UserSchema);