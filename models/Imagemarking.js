var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PatientimageSchema = new Schema({
    'imageid': String,
    'marking': Array,
});

module.exports = mongoose.model('imagemarking', PatientimageSchema);
