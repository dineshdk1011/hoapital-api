var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VisitSchema = new Schema({
    "visitDate": String,
    "appointmentId": String,
    "visitReason": String,
    'bp': String,
    'height': String,
    'weight': String,
    'bmi': String,
    'muac': String,
    'waist': String,
    'patientid': String,
    'clinicid': String,


});

module.exports = mongoose.model('visit', VisitSchema);
