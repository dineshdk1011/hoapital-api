var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PdrugmasterSchema = new Schema({
    'name': String,
    'clinicid': String,
    'brand': String,
    'price': String,
    'description': String,
    'classification': String,
    'sku': String,
    'stock': String,
    'vendor': String,
    'batch': String,
    'expiry': String,
    'doss': String,
    'instruction': String,
    'salt': String
});

module.exports = mongoose.model('drug', PdrugmasterSchema);
