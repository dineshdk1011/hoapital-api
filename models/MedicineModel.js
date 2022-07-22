var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MedicineSchema = new Schema({
    'name': String,
    'brand': String,
    'stock': String,
    'notes': String,
    'instruction': String,
    'description': String,
    'sku': String,
    'image': String,
});

module.exports = mongoose.model('medicine', MedicineSchema);
