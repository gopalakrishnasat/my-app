
const loan_ctrl = require('../Controllers/loan');

const loan_validations = require('../Utils/loanvalidations')
module.exports = function(app){

	// Create a loan.
	app.post('/loan/create', function(req, res){

		const{ error } = loan_validations.loan_add.validate(req.body);
		if(error) return res.status(400).send(error.details[0].message);

		console.log("Routes/loan: Inside '/loan/create' functionality.");
		loan_ctrl.createLoan(req.body, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		});
		
	});

	// Get the loans list.
	app.get('/loan/list', function(req, res){

		const{ error } = loan_validations.loan_details.validate({});
		if(error) return res.status(400).send(error.details[0].message);

		console.log("Routes/loan: Inside '/loan/list' functionality.");

		loan_ctrl.listLoan(req.query, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		});
	});

	// Update a Loan record.
	app.put('/loan/update', function(req, res){

		const{ error } = loan_validations.loan_update.validate(req.body);
		if(error) return res.status(400).send(error.details[0].message);

		console.log("Routes/loan: Inside '/loan/update' functionality.");

		loan_ctrl.updateLoan(req.body, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		})
	});

	// Delete Loan record from database.
	app.delete('/loan/delete', function(req, res){

		const{ error } = loan_validations.loan_delete.validate(req.body);
		if(error) return res.status(400).send(error.details[0].message);

		console.log("Routes/loan: Inside '/loan/delete' functionality.");

		loan_ctrl.deleteLoan(req.body, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		})
	})

};







