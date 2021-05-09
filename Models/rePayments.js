
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rePaymentSchema = new Schema({

	loanId: {type: Schema.Types.ObjectId, ref: "loans"},
	customerId: {type: Schema.Types.ObjectId, ref: `customers`},
	re_payment_amount: {type: String},
	date: {type: Date, default: Date.now()}
});

const rePayments = mongoose.model("rePayments", rePaymentSchema);
module.exports = rePayments;