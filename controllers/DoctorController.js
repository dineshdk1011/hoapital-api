var DoctorModel = require('../models/DoctorModel.js');

/**
 * DoctorController.js
 *
 * @description :: Server-side logic for managing Doctors.
 */
module.exports = {

    /**
     * DoctorController.list()
     */
    list: function (req, res) {
        DoctorModel.find(function (err, Doctors) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Doctor.',
                    error: err
                });
            }

            return res.json(Doctors);
        });
    },

    /**
     * DoctorController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        DoctorModel.findOne({_id: id}, function (err, Doctor) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Doctor.',
                    error: err
                });
            }

            if (!Doctor) {
                return res.status(404).json({
                    message: 'No such Doctor'
                });
            }

            return res.json(Doctor);
        });
    },

    /**
     * DoctorController.create()
     */
    create: function (req, res) {
        var Doctor = new DoctorModel({
			firstname : req.body.firstname,
			middlename : req.body.middlename,
			lastname : req.body.lastname,
			phoneno : req.body.phoneno,
			publicno : req.body.publicno,
			genderid : req.body.genderid,
			address : req.body.address,
			photo : req.body.photo,
			email : req.body.email,
			dob : req.body.dob,
			age : req.body.age,
			bloodgroup : req.body.bloodgroup,
			notifychannelid : req.body.notifychannelid,
			languageid : req.body.languageid,
			headline : req.body.headline,
			profiledetail : req.body.profiledetail,
			specialityid : req.body.specialityid,
			superspeciality : req.body.superspeciality,
			mrnnumber : req.body.mrnnumber,
			socialmediadetails : req.body.socialmediadetails,
			createdat : req.body.createdat,
			createdby : req.body.createdby,
			modifiedat : req.body.modifiedat,
			modifiedby : req.body.modifiedby,
			id : req.body.id,
			status : req.body.status
        });

        Doctor.save(function (err, Doctor) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Doctor',
                    error: err
                });
            }

            return res.status(201).json(Doctor);
        });
    },

    /**
     * DoctorController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        DoctorModel.findOne({_id: id}, function (err, Doctor) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Doctor',
                    error: err
                });
            }

            if (!Doctor) {
                return res.status(404).json({
                    message: 'No such Doctor'
                });
            }

            Doctor.firstname = req.body.firstname ? req.body.firstname : Doctor.firstname;
			Doctor.middlename = req.body.middlename ? req.body.middlename : Doctor.middlename;
			Doctor.lastname = req.body.lastname ? req.body.lastname : Doctor.lastname;
			Doctor.phoneno = req.body.phoneno ? req.body.phoneno : Doctor.phoneno;
			Doctor.publicno = req.body.publicno ? req.body.publicno : Doctor.publicno;
			Doctor.genderid = req.body.genderid ? req.body.genderid : Doctor.genderid;
			Doctor.address = req.body.address ? req.body.address : Doctor.address;
			Doctor.photo = req.body.photo ? req.body.photo : Doctor.photo;
			Doctor.email = req.body.email ? req.body.email : Doctor.email;
			Doctor.dob = req.body.dob ? req.body.dob : Doctor.dob;
			Doctor.age = req.body.age ? req.body.age : Doctor.age;
			Doctor.bloodgroup = req.body.bloodgroup ? req.body.bloodgroup : Doctor.bloodgroup;
			Doctor.notifychannelid = req.body.notifychannelid ? req.body.notifychannelid : Doctor.notifychannelid;
			Doctor.languageid = req.body.languageid ? req.body.languageid : Doctor.languageid;
			Doctor.headline = req.body.headline ? req.body.headline : Doctor.headline;
			Doctor.profiledetail = req.body.profiledetail ? req.body.profiledetail : Doctor.profiledetail;
			Doctor.specialityid = req.body.specialityid ? req.body.specialityid : Doctor.specialityid;
			Doctor.superspeciality = req.body.superspeciality ? req.body.superspeciality : Doctor.superspeciality;
			Doctor.mrnnumber = req.body.mrnnumber ? req.body.mrnnumber : Doctor.mrnnumber;
			Doctor.socialmediadetails = req.body.socialmediadetails ? req.body.socialmediadetails : Doctor.socialmediadetails;
			Doctor.createdat = req.body.createdat ? req.body.createdat : Doctor.createdat;
			Doctor.createdby = req.body.createdby ? req.body.createdby : Doctor.createdby;
			Doctor.modifiedat = req.body.modifiedat ? req.body.modifiedat : Doctor.modifiedat;
			Doctor.modifiedby = req.body.modifiedby ? req.body.modifiedby : Doctor.modifiedby;
			Doctor.id = req.body.id ? req.body.id : Doctor.id;
			Doctor.status = req.body.status ? req.body.status : Doctor.status;
			
            Doctor.save(function (err, Doctor) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Doctor.',
                        error: err
                    });
                }

                return res.json(Doctor);
            });
        });
    },

    /**
     * DoctorController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        DoctorModel.findByIdAndRemove(id, function (err, Doctor) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Doctor.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
