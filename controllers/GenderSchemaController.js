var GenderschemaModel = require('../models/GenderSchemaModel.js');

/**
 * GenderSchemaController.js
 *
 * @description :: Server-side logic for managing GenderSchemas.
 */
module.exports = {

    /**
     * GenderSchemaController.list()
     */
    list: function (req, res) {
        GenderschemaModel.find(function (err, GenderSchemas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting GenderSchema.',
                    error: err
                });
            }

            return res.json(GenderSchemas);
        });
    },

    /**
     * GenderSchemaController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        GenderschemaModel.findOne({_id: id}, function (err, GenderSchema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting GenderSchema.',
                    error: err
                });
            }

            if (!GenderSchema) {
                return res.status(404).json({
                    message: 'No such GenderSchema'
                });
            }

            return res.json(GenderSchema);
        });
    },

    /**
     * GenderSchemaController.create()
     */
    create: function (req, res) {
        var GenderSchema = new GenderschemaModel({
			title : req.body.title,
			description : req.body.description,
			createdat : req.body.createdat,
			createdby : req.body.createdby,
			modifiedby : req.body.modifiedby,
			modifiedat : req.body.modifiedat,
			id : req.body.id,
			status : req.body.status
        });

        GenderSchema.save(function (err, GenderSchema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating GenderSchema',
                    error: err
                });
            }

            return res.status(201).json(GenderSchema);
        });
    },

    /**
     * GenderSchemaController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        GenderschemaModel.findOne({_id: id}, function (err, GenderSchema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting GenderSchema',
                    error: err
                });
            }

            if (!GenderSchema) {
                return res.status(404).json({
                    message: 'No such GenderSchema'
                });
            }

            GenderSchema.title = req.body.title ? req.body.title : GenderSchema.title;
			GenderSchema.description = req.body.description ? req.body.description : GenderSchema.description;
			GenderSchema.createdat = req.body.createdat ? req.body.createdat : GenderSchema.createdat;
			GenderSchema.createdby = req.body.createdby ? req.body.createdby : GenderSchema.createdby;
			GenderSchema.modifiedby = req.body.modifiedby ? req.body.modifiedby : GenderSchema.modifiedby;
			GenderSchema.modifiedat = req.body.modifiedat ? req.body.modifiedat : GenderSchema.modifiedat;
			GenderSchema.id = req.body.id ? req.body.id : GenderSchema.id;
			GenderSchema.status = req.body.status ? req.body.status : GenderSchema.status;
			
            GenderSchema.save(function (err, GenderSchema) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating GenderSchema.',
                        error: err
                    });
                }

                return res.json(GenderSchema);
            });
        });
    },

    /**
     * GenderSchemaController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        GenderschemaModel.findByIdAndRemove(id, function (err, GenderSchema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the GenderSchema.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
