
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loansSchema = mongoose.Schema({

	loanType: {type: String},	// 3-Months, 6-Months, 12-Months
	amount: {type: String},
	customerId: {type: Schema.Types.ObjectId, ref:`customers`},
	payment_mode: {type: String}, // Week, Month, Year
	release_date: {type: Date, default:Date.now()}

});

const loans = mongoose.model('loans', loansSchema);
module.exports = loans;