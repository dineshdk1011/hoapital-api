const Joi = require('joi');

module.exports.creation = {
    body: {
        weight: Joi.string().min(1).required(),
        sugar: Joi.string().min(1).required(),
        bp: Joi.string().min(1).required(),
        hb: Joi.string().min(1).required(),
        progressnotes: Joi.string().min(1).required(),
        addonnotes: Joi.string().min(1).required(),
        patientid: Joi.string().min(1).optional(),
        date: Joi.string().min(1).optional(),
        time: Joi.string().min(1).optional(),
    }
};


