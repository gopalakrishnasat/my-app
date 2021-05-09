
const universalFunc = require('../Utils/universalFunctions');
const loan_model = require('../Models/loans');

module.exports = {

	// Create a new loan.
	createLoan: function(data, cb){

		console.log("Controllers: Inside 'createLoan' functionality.");

		universalFunc.saveInDB(loan_model, data, function(err, res){
			if(err){
				cb(err, null);
			}else{
				cb(null, res);
			}
		});

	},

	// Get Loans List.
	listLoan: function(data, cb){

		console.log("Controllers: Inside 'listLoan' functionality.");
		queryObj = {

		};
		(data._id) ? queryObj._id = data._id:null;

		universalFunc.list_documents_in_DB(loan_model, queryObj, function(err, res){
			if(err){
				cb(err, null);
			}else{
				cb(null, res);
			}
		})
	},

	// Update Loan.
	updateLoan: function(data, cb){

		console.log("Controllers/loan.js: Inside 'updateLoan' functionality.");

		const queryObj = {
			_id: data._id
		};

		const updateObj = {
			amount: data.amount,
			payment_mode: data.payment_mode
		};

		universalFunc.find_and_update_in_DB(loan_model, queryObj, updateObj, function(err, res){
			if(err){
				cb(err, null);
			}else{
				cb(null, res);
			}
		})
	},

	// Delete Loan from the database.
	deleteLoan: function(data, cb){
		console.log("Controllers/loan.js: Inside 'deleteLoan' functionality.");

		const queryObj = {
			_id: data._id
		};

		universalFunc.delete_document_in_DB(loan_model, queryObj, function(err, res){
			if(err){
				cb(err, null);
			}else{
				cb(null, res);
			}
		});
	}
};











