var PatientModel = require('../models/PatientModel.js');
const bcrypt = require('bcryptjs');
const secret = "4641316895";
const jwt = require('jsonwebtoken')
/**
 * PatientController.js
 *
 * @description :: Server-side logic for managing Patients.
 */
module.exports = {

    /**
     * PatientController.list()
     */
    list: function (req, res) {
        PatientModel.find(function (err, Patients) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Patient.',
                    error: err
                });
            }

            return res.json(Patients);
        });
    },

    /**
     * PatientController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        PatientModel.findOne({ patientid: id }, function (err, Patient) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Patient.',
                    error: err
                });
            }

            if (!Patient) {
                return res.status(404).json({
                    message: 'No such Patient'
                });
            }

            return res.json(Patient);
        });
    },
    getdata: function (req, res) {
        var id = req.params.id;

        PatientModel.findOne({ _id: id }, function (err, User) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting User.',
                    error: err
                });
            }

            if (!User) {
                return res.status(404).json({
                    message: 'No such User'
                });
            }

            return res.json(User);
        });
    },

    /**
     * PatientController.create()
     */
    create: function (req, res) {
        var Patient = new PatientModel(req.body);
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);
        Patient['password'] = hash
        Patient.save(function (err, Patient) {
            if (err) {
                console.log(err)
                return res.status(500).json({
                    message: 'Error when creating Patient',
                    error: err
                });
            }

            return res.status(201).json(Patient);
        });
    },

    /**
     * PatientController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        PatientModel.findOne({ _id: id }, function (err, Patient) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Patient',
                    error: err
                });
            }

            if (!Patient) {
                return res.status(404).json({
                    message: 'No such Patient'
                });
            }

            Patient.firstname = req.body.firstname ? req.body.firstname : Patient.firstname;
            Patient.middlename = req.body.middlename ? req.body.middlename : Patient.middlename;
            Patient.lastname = req.body.lastname ? req.body.lastname : Patient.lastname;
            Patient.phonenumber = req.body.phonenumber ? req.body.phonenumber : Patient.phonenumber;
            Patient.secondarynumber = req.body.secondarynumber ? req.body.secondarynumber : Patient.secondarynumber;
            Patient.genderid = req.body.genderid ? req.body.genderid : Patient.genderid;
            Patient.address = req.body.address ? req.body.address : Patient.address;
            Patient.area = req.body.area ? req.body.area : Patient.area;
            Patient.photo = req.body.photo ? req.body.photo : Patient.photo;
            Patient.email = req.body.email ? req.body.email : Patient.email;
            Patient.dob = req.body.dob ? req.body.dob : Patient.dob;
            Patient.bloodgroup = req.body.bloodgroup ? req.body.bloodgroup : Patient.bloodgroup;
            Patient.caseid = req.body.caseid ? req.body.caseid : Patient.caseid;
            Patient.patientgroupid = req.body.patientgroupid ? req.body.patientgroupid : Patient.patientgroupid;
            Patient.medicalhistoryids = req.body.medicalhistoryids ? req.body.medicalhistoryids : Patient.medicalhistoryids;
            Patient.otherhistory = req.body.otherhistory ? req.body.otherhistory : Patient.otherhistory;
            Patient.occupation = req.body.occupation ? req.body.occupation : Patient.occupation;
            Patient.skypeid = req.body.skypeid ? req.body.skypeid : Patient.skypeid;
            Patient.idcardtype = req.body.idcardtype ? req.body.idcardtype : Patient.idcardtype;
            Patient.idcardnumber = req.body.idcardnumber ? req.body.idcardnumber : Patient.idcardnumber;
            Patient.notifychannelid = req.body.notifychannelid ? req.body.notifychannelid : Patient.notifychannelid;
            Patient.languageid = req.body.languageid ? req.body.languageid : Patient.languageid;
            Patient.referralid = req.body.referralid ? req.body.referralid : Patient.referralid;
            Patient.referraldescription = req.body.referraldescription ? req.body.referraldescription : Patient.referraldescription;
            Patient.referredbyid = req.body.referredbyid ? req.body.referredbyid : Patient.referredbyid;
            Patient.createdat = req.body.createdat ? req.body.createdat : Patient.createdat;
            Patient.createdby = req.body.createdby ? req.body.createdby : Patient.createdby;
            Patient.modifiedby = req.body.modifiedby ? req.body.modifiedby : Patient.modifiedby;
            Patient.modifiedat = req.body.modifiedat ? req.body.modifiedat : Patient.modifiedat;
            Patient.id = req.body.id ? req.body.id : Patient.id;
            Patient.status = req.body.status ? req.body.status : Patient.status;
            Patient.duefees = req.body.duefees ? req.body.duefees : Patient.duefees;

            Patient.save(function (err, Patient) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Patient.',
                        error: err
                    });
                }

                return res.json(Patient);
            });
        });
    },

    login: async function (req, res) {
        let user = await PatientModel.findOne({ email: req.body.email, rolename: req.body.role });
        if (user) {
            let passwordresult = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if (passwordresult == true) {
                let token = jwt.sign({ userid: user._id }, secret, { expiresIn: "8h" });
                res.json({ token, user });
            } else {
                res.send("Wrong Password.. Please Check")
            }
        } else {
            res.send("User Not Found.. Please Check")
        }
    },

    /**
     * PatientController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        PatientModel.findByIdAndRemove(id, function (err, Patient) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Patient.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
