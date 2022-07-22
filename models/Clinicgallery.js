var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClinicgallerySchema = new Schema({
    'image': String,
    'userid': String,
});

module.exports = mongoose.model('clinicgallery', ClinicgallerySchema);