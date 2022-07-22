var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PatientimageSchema = new Schema({
    'image': String,
    'patientid': String,
    'title':String,
    'type':String,
});

module.exports = mongoose.model('patientimage', PatientimageSchema);
