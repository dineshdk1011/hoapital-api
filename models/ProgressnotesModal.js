var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProgressnotesSchema = new Schema({
    'weight': String,
    'sugar': String,
    'bp': String,
    'hb': String,
    'progressnotes': String,
    'addonnotes': String,
    'patientid': String,
    'date': String,
    'time': String,
});

module.exports = mongoose.model('Progressnotes', ProgressnotesSchema);
