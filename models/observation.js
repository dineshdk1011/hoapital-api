var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GallerySchema = new Schema({
    'bp': String,
    'height': String,
    'weight': String,
    'bmi': String,
    'muac': String,
    'waist': String,
    'patientid': String,
    'clinicid': String,
    'drugallergy': String,
});

module.exports = mongoose.model('observation', GallerySchema);
