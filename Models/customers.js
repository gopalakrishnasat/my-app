// This file define the customer schema and export the model.

const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({

	firstName: {type: String},
	lastName: {type: String},
	age: {type: Number},
	gender: {type: String},
	address: {type: String},
	mobile_num: {type: String},
	emial: {type: String},
	occupation: {type: String}

});

const customers = mongoose.model('customers', customerSchema);
module.exports = customers;