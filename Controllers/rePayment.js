
const universalFunc = require('../Utils/universalFunctions');
const rePayment_model = require('../Models/rePayments');

module.exports = {

	// Add new re-payment document.
	add_rePayment: function(data, cb){

		console.log("Controllers/rePayment: Inside add_rePayment functionality.");

		universalFunc.saveInDB(rePayment_model, data, function(err, res){
			if(err){
				cb(err, null);
			}else{
				cb(null, res);
			}
		});
	},

	//List re-payment records.
	list_rePayment: function(data, cb){

		console.log("Controllers/rePayment: Inside list_rePayment functionality.");
		queryobj = {};

		(data._id) ? queryObj._id = data._id:null;

		universalFunc.list_documents_in_DB(rePayment_model, queryobj, function(err, res){
			if(err){
				cb(err, null);
			}else{
				cb(null, res);
			}
		});
	},
	// Update Re-payment record.
	update_rePayment: function(data, cb){

		console.log("Controllers/rePayment: Inside update_rePayment functionality.");
		const queryObj = { 
			_id: data._id
		};
		const updateObj = {
			re_payment_amount: data.re_payment_amount
		}

		universalFunc.find_and_update_in_DB(rePayment_model, queryObj, updateObj, function(err, res){
			if(err){
				cb(err, null);
			}else{
				cb(null, res);
			}
		});
	},

	// Delete rePayment record.
	delete_rePayment: function(data, cb){

		console.log("Controllers/rePayment: Inside delete_rePayment functionality.");
		const queryObj = { 
			_id: data.repaymentId
		};

		universalFunc.delete_document_in_DB(rePayment_model, queryObj, function(err, res){
			if(err){
				cb(err, null);
			}else{
				cb(null, res);
			}
		});
	}

};