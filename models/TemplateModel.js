var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TemplateSchema = new Schema({
    'name': String,
    'cost': String,
    'gst': String,
    'notes': String,
    'instruction': String,
});

module.exports = mongoose.model('template', TemplateSchema);
