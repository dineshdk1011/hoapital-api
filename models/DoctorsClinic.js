var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DoctorsClinic = new Schema({
    "clinicname": String,
    "speciality": String,
    "about": String,
});

module.exports = mongoose.model('DoctorClinic', DoctorsClinic);
