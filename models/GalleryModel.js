var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GallerySchema = new Schema({
    'image': String,
    'userid': String,
    
});

module.exports = mongoose.model('gallery', GallerySchema);
