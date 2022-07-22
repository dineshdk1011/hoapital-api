const Joi = require("joi");

module.exports.creation = {
  body: {
    instruction: Joi.array().min(1).required(),
    drugname: Joi.array().min(1).required(),
    doss: Joi.array().min(1).required(),
    duration: Joi.array().min(1).required(),
    fequency: Joi.array().min(1).required(),
    time: Joi.array().min(1).required(),
    patientid: Joi.string().min(1).required(),
    appointmentid: Joi.string().min(1).required(),
    status: Joi.string().min(1).required(),
    doctorid: Joi.string().min(1).required(),
    clinicid: Joi.string().min(1).optional(),
  },
};
