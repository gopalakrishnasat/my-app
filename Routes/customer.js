// This file defines all customer routes.

const custCntrls = require('../Controllers/customer');
const Joi = require('joi');
const cust_validation = require('../Utils/customervalidation');
module.exports = function(app){

	/*Express API creation format
	
		applicationObject.MethodName(API path, handler function);

		Handler function have two params.
		1. Request- It is having all the API request data.
		2. It have all the methods to send the response to this route.
	*/

	// Add customer route.
	app.post('/customer/add', function(req, res){
		

		const { error } = cust_validation.customer_add.validate(req.body);
        if(error) return res.status(400).send(error.details[0].message);


		console.log("Routes: Inside '/customer/add' API function.");
		custCntrls.addCustomer(req.body, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		});

	});
	// Get customers List.
	app.get('/customer/list', function(req, res){
		

		const { error } = cust_validation.customer_details.validate({});
        if(error) return res.status(400).send(error.details[0].message);
		
		console.log("output for require.query",req.query)
		custCntrls.listCustomers(req.query,function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		});
	});

	// Update customer data.
	app.put('/customer/update', function(req, res){
		

		const { error } = cust_validation.customer_update.validate(req.body);
        if(error) return res.status(400).send(error.details[0].message);

		custCntrls.updateCustomer(req.body, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		});
	});

	// Delete customer document.
	app.delete('/customer/delete', function(req, res){
		// Delete customer record logic here.
		
		const reqDataValidator = Joi.object().keys({
			_id : Joi.string().required().min(24)			

		});

		const { error } = cust_validation.customer_delete.validate(req.body);
        if(error) return res.status(400).send(error.details[0].message);
		
		
		custCntrls.deleteCustomer(req.body, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		});
	})

};








