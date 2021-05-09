
const rePayment_ctrl = require('../Controllers/rePayment');
const repaymentvalidation = require('../Utils/repaymentvalidation');

module.exports = function(app){

	// Add a new repayment record.
	app.post('/repayment/add', function(req, res){

		const{ error } = repaymentvalidation.repayment_add.validate(req.body);
		if(error) return res.status(400).send(error.details[0].message);

		console.log("Rountes/repayment: Inside '/repayment/add' functionality.");
		
		rePayment_ctrl.add_rePayment(req.body, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		});
	});

	// Get repayments lists.
	app.get('/repayment/list', function(req, res){

		const{ error } = repaymentvalidation.repayment_list.validate(req.query);
		if(error) return res.status(400).send(error.details[0].message);

		console.log("Rountes/repayment : Inside '/repayment/lost' functionality.");

		rePayment_ctrl.list_rePayment(req.query, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		});
	});
	//Update repayment record.
	app.put('/repayment/update', function(req, res){

		const{ error } = repaymentvalidation.repayment_update.validate(req.body);
		if(error) return res.status(400).send(error.details[0].message);

		console.log("Routes/repayment: Inside '/repayment/update' functionality.");
		rePayment_ctrl.update_rePayment(req.body, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		});
	});

	// Delete repayment record.
	app.delete('/repayment/delete', function(req, res){

		const{ error } = repaymentvalidation.repayment_delete.validate({});
		if(error) return res.status(400).send(error.details[0].message);

		console.log("Routes/repayment: Inside '/repayment/delete' functionality.");

		rePayment_ctrl.delete_rePayment(req.body, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		})
	})
	

}