var MedicalhistoryschemaModel = require('../models/MedicalHistorySchemaModel.js');

/**
 * MedicalHistorySchemaController.js
 *
 * @description :: Server-side logic for managing MedicalHistorySchemas.
 */
module.exports = {

    /**
     * MedicalHistorySchemaController.list()
     */
    list: function (req, res) {
        MedicalhistoryschemaModel.find(function (err, MedicalHistorySchemas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting MedicalHistorySchema.',
                    error: err
                });
            }

            return res.json(MedicalHistorySchemas);
        });
    },

    /**
     * MedicalHistorySchemaController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        MedicalhistoryschemaModel.findOne({_id: id}, function (err, MedicalHistorySchema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting MedicalHistorySchema.',
                    error: err
                });
            }

            if (!MedicalHistorySchema) {
                return res.status(404).json({
                    message: 'No such MedicalHistorySchema'
                });
            }

            return res.json(MedicalHistorySchema);
        });
    },

    /**
     * MedicalHistorySchemaController.create()
     */
    create: function (req, res) {
        var MedicalHistorySchema = new MedicalhistoryschemaModel({
			title : req.body.title,
			description : req.body.description,
			createdat : req.body.createdat,
			createdby : req.body.createdby,
			modifiedby : req.body.modifiedby,
			modifiedat : req.body.modifiedat,
			id : req.body.id,
			status : req.body.status
        });

        MedicalHistorySchema.save(function (err, MedicalHistorySchema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating MedicalHistorySchema',
                    error: err
                });
            }

            return res.status(201).json(MedicalHistorySchema);
        });
    },

    /**
     * MedicalHistorySchemaController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        MedicalhistoryschemaModel.findOne({_id: id}, function (err, MedicalHistorySchema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting MedicalHistorySchema',
                    error: err
                });
            }

            if (!MedicalHistorySchema) {
                return res.status(404).json({
                    message: 'No such MedicalHistorySchema'
                });
            }

            MedicalHistorySchema.title = req.body.title ? req.body.title : MedicalHistorySchema.title;
			MedicalHistorySchema.description = req.body.description ? req.body.description : MedicalHistorySchema.description;
			MedicalHistorySchema.createdat = req.body.createdat ? req.body.createdat : MedicalHistorySchema.createdat;
			MedicalHistorySchema.createdby = req.body.createdby ? req.body.createdby : MedicalHistorySchema.createdby;
			MedicalHistorySchema.modifiedby = req.body.modifiedby ? req.body.modifiedby : MedicalHistorySchema.modifiedby;
			MedicalHistorySchema.modifiedat = req.body.modifiedat ? req.body.modifiedat : MedicalHistorySchema.modifiedat;
			MedicalHistorySchema.id = req.body.id ? req.body.id : MedicalHistorySchema.id;
			MedicalHistorySchema.status = req.body.status ? req.body.status : MedicalHistorySchema.status;
			
            MedicalHistorySchema.save(function (err, MedicalHistorySchema) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating MedicalHistorySchema.',
                        error: err
                    });
                }

                return res.json(MedicalHistorySchema);
            });
        });
    },

    /**
     * MedicalHistorySchemaController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        MedicalhistoryschemaModel.findByIdAndRemove(id, function (err, MedicalHistorySchema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the MedicalHistorySchema.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
