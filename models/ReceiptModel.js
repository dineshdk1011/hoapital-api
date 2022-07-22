var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReceiptSchema = new Schema({
	'amount': String,
	'date': String,
	'receiptid': String,
	'mode': String,
	'cardnumber': String,
    'patientid': String,
	'doctorid': String,
});

module.exports = mongoose.model('Receipt', ReceiptSchema);
