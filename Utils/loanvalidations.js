
const Joi = require('joi');
module.exports = {
    loan_add : Joi.object().keys({
        loanType:Joi.string().required(),
        amount:Joi.string().required(),
        customerId:Joi.string().required(),
        payment_mode:Joi.string().required(),
       
    }),

    loan_details : Joi.object().keys({
        _id:Joi.string().min(24).optional(),
        loanType:Joi.string(),
        amount:Joi.string(),
        customerId:Joi.string(),
        payment_mode:Joi.string(),
        realease_date:Joi.string()
    }),
    loan_update : Joi.object().keys({
        _id : Joi.string().required().min(24),
        amount:Joi.string().required(),
        payment_mode:Joi.string().required(),

    }),
    loan_delete : Joi.object().keys({
        _id : Joi.string().min(24)
    })
}