const Joi = require('joi');

module.exports.creation = {
    body: {
        firstname: Joi.string().min(1).required(),
        email: Joi.string().email({ minDomainSegments: 2 }).required(),
        lastname: Joi.string().min(1).required(),
        phonenumber: Joi.number().min(10).required(),
        gender: Joi.string().min(1).required(),
        address: Joi.string().min(1).required(),
        secondarynumber: Joi.string().min(1).optional(),
        area: Joi.string().min(1).optional(),
        photo: Joi.string().min(1).optional(),
        dob: Joi.string().min(1).optional(),
        bloodgroup: Joi.string().min(1).optional(),
        caseid: Joi.string().min(1).optional(),
        patientgroupid: Joi.string().min(1).optional(),
        medicalhistoryids: Joi.string().min(1).optional(),
        otherhistory: Joi.string().min(1).optional(),
        occupation: Joi.string().min(1).optional(),
        age: Joi.number().min(1).optional(),
        state: Joi.string().min(1).optional(),
        skypeid: Joi.string().min(1).optional(),
        aadhar: Joi.string().min(1).optional(),
        languageid: Joi.string().min(1).optional(),
        referralid: Joi.string().min(1).optional(),
        referredbyid: Joi.string().min(1).optional(),
        createdat: Joi.string().min(1).optional(),
        createdby: Joi.string().min(1).optional(),
        status: Joi.string().min(1).optional(),
        patientid: Joi.string().min(1).optional(),
        password: Joi.string().min(1).required(),
        roletype:Joi.string().min(1).required(),
    }
};
module.exports.login = {
    body: {
        email: Joi.string().email({ minDomainSegments: 2 }).required(),
        password: Joi.string().min(1).required(),
        role: Joi.string().min(1).required(),
    },
};

