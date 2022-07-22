var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PatientimageSchema = new Schema({
    'video': String,
    'patientid': String,
});

module.exports = mongoose.model('patientvideo', PatientimageSchema);