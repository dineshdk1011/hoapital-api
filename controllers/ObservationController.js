var GalleryModel = require('../models/observation');

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

            Patient.bp = req.body.bp ? req.body.bp : Patient.bp;
            Patient.height = req.body.height ? req.body.height : Patient.height;
            Patient.weight = req.body.weight ? req.body.weight : Patient.weight;
            Patient.bmi = req.body.bmi ? req.body.bmi : Patient.bmi;
            Patient.muac = req.body.muac ? req.body.muac : Patient.muac;
            Patient.waist = req.body.waist ? req.body.waist : Patient.waist;
            Patient.drugallergy = req.body.drugallergy ? req.body.drugallergy : Patient.drugallergy;
            Patient.patientid = req.body.patientid ? req.body.patientid : Patient.patientid;
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

        GalleryModel.findByIdAndRemove(id, function (err, Patient) {
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
