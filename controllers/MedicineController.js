var GalleryModel = require('../models/MedicineModel');

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
        var id = req.params.id;

        GalleryModel.find({ patientid: id }, function (err, Patient) {
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

            Patient.name = req.body.name ? req.body.name : Patient.name;
            Patient.description = req.body.description ? req.body.description : Patient.description;
            Patient.cost = req.body.cost ? req.body.cost : Patient.cost;
            Patient.sku = req.body.sku ? req.body.sku : Patient.sku;
            Patient.notes = req.body.notes ? req.body.notes : Patient.notes;
            Patient.stock = req.body.stock ? req.body.stock : Patient.stock;
            Patient.instruction = req.body.instruction ? req.body.instruction : Patient.instruction;


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

            return res.status(204).json(true);
        });
    }
};
