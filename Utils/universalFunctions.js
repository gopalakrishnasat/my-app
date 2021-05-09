module.exports = {

	// Send email utility function.
	sendEmail: function(email, cb){

		console.log("Utils/universalFunctions: Inside sendEmail function.");
		// some send email magic and will send the response through callback function.
		cb(null, "email sent successfully.")

	},

	// Create or save a new document in the given modelName.
	saveInDB: function(modelName, saveObject, cb){

		console.log("Utils/universal: Inside 'saveInDB' functionality.");
		
		modelName(saveObject).save(function(err, res){
			if(err){
				cb(err, null);
			}else{
				cb(null, res);
			}
		});
	},

	// Generic function to list the documents based on the queryObject from the given modelName.
	list_documents_in_DB: function(modelName, queryobj, cb){

		console.log("Utils/universal: Inside 'list_documents_in_DB' functionality.");
		modelName.find(queryobj, function(err, res){
			if(err){
				cb(err, null);
			}else{
				cb(null, res);
			}
		});
	},

	// Generic function to find and update a document in database.
	find_and_update_in_DB: function(modelName, queryObj, updateObj, cb){

		console.log("Utils/universalFunctions.js: Inside 'find_and_update_in_DB' functionality.");

		modelName.findOneAndUpdate(queryObj, updateObj, function(err, res){
			if(err){
				cb(err, null);
			}else{
				cb(null, res);
			}
		})
	},

	//Generic function to delete a record from the given collection based on the queryObject.
	delete_document_in_DB: function(modelName, queryObj, cb){

		console.log("Utils/universalFunctions.js: Inside 'delete_document_in_DB' functionality.");

		modelName.deleteOne(queryObj, function(err, res){
			if(err){
				cb(err, null);
			}else{
				cb(null, res);
			}
		})
	}

}














