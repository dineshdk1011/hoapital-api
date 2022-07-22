const Joi = require("joi");

module.exports.login = {
  body: {
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string().min(1).required(),
    role: Joi.string().min(1).required(),
  },
};
module.exports.register = {
  body: {
    name: Joi.string().min(1).optional(),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string().min(1).required(),
    phonenumber: Joi.string().min(10).required(),
    rolename: Joi.string().min(1).required(),
    status: Joi.string().min(1).required(),
  },
};
