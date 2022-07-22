var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PatientimageSchema = new Schema({
    'fromid': String,
    'toid': String,
    'msg': String,
    'datetime': String,
    'read': String,
});

module.exports = mongoose.model('message', PatientimageSchema);