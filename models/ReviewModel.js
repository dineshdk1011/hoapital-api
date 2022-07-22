var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClinicgallerySchema = new Schema({
    'doctor': String,
    'review': String,
    'rating': String,
    'date': String,
    'patientid': String,
    'replay': String,
});

module.exports = mongoose.model('review', ClinicgallerySchema);