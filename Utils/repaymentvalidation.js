const Joi = require("joi");

module.exports = {
    repayment_add : Joi.object().keys({
        loanId: Joi.string().required(),
        customerId: Joi.string().required(),
        re_payment_amount: Joi.string().required()
        
    }),

    repayment_list:Joi.object().keys({
         repayment_add : Joi.object(),
        loanId: Joi.string().required(),
        customerId: Joi.string().required(),
        re_payment_amount: Joi.string().required()

    }),
        repayment_update : Joi.object().keys({
            _id : Joi.string().required(),
            re_payment_amount : Joi.string().required()

        }),
        repayment_delete : Joi.object().keys({
            _id :Joi.string().required(),
            
        })

}
    
