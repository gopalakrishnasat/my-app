const Joi = require('joi');


module.exports={
     customer_add : Joi.object().keys({
        firstName: Joi.string().required().min(3).max(7),
        lastName: Joi.string().required(),
        age: Joi.string().required(),
        gender: Joi.string().required().valid("male", "female", "others"),
        address: Joi.string().required(),
        mobile_num: Joi.string().required(),
        email: Joi.string().required(),
        occupation: Joi.string().required()
    }),
     customer_details : Joi.object().keys({
        _id: Joi.string().min(24).optional()
       
    }),
    
     customer_update : Joi.object().keys({
        _id : Joi.string().required().min(24),
        occupation: Joi.string().required()
    
    }),
    
    customer_delete : Joi.object().keys({
        _id : Joi.string().required().min(24)			
    
    })
    
}

