var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClinicSchema = new Schema({
    "clinicname": String,
    "nabh": String,
    "email": String,
    "phone": String,
    "charges": String,
    "gstpin": String,
    "speciality": String,
    "followupcharges": String,
    "about": String,
    "pincode": String,
    "city": String,
    "area": String,
    "address": String,
    "fromtiming": String,
    "totiming": String,
    "googlelink": String,
    "justdiallink": String,
    "doctorid": String,
    "status": String,
});

module.exports = mongoose.model('clinic', ClinicSchema);
