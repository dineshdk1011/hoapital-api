var GalleryModel = require('../models/RoleManagement');

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
        GalleryModel.find(function (err, Patients) {
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
        var patientid = req.params.id;
        GalleryModel.find({ patientid: patientid }, function (err, Patient) {
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

    /**
     * PatientController.create()
     */
    create: function (req, res) {
        var Patient = new GalleryModel(req.body);
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

        GalleryModel.findOne({ _id: id }, function (err, Patient) {
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

            Patient.role = req.body.role ? req.body.role : Patient.role;
            Patient.privilege = req.body.privilege ? req.body.privilege : Patient.privilege;
            Patient.clinicid = req.body.clinicid ? req.body.clinicid : Patient.clinicid;

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

    /**
     * PatientController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        GalleryModel.findByIdAndRemove(id, function (err, User) {
            if (err) {
                console.log(err)
                return res.status(500).json({
                    message: 'Error when deleting the User.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
