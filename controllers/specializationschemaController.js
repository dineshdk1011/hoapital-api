var SpecializationschemaModel = require('../models/specializationschemaModel.js');

/**
 * specializationschemaController.js
 *
 * @description :: Server-side logic for managing specializationschemas.
 */
module.exports = {

    /**
     * specializationschemaController.list()
     */
    list: function (req, res) {
        SpecializationschemaModel.find(function (err, specializationschemas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting specializationschema.',
                    error: err
                });
            }

            return res.json(specializationschemas);
        });
    },

    /**
     * specializationschemaController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        SpecializationschemaModel.findOne({_id: id}, function (err, specializationschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting specializationschema.',
                    error: err
                });
            }

            if (!specializationschema) {
                return res.status(404).json({
                    message: 'No such specializationschema'
                });
            }

            return res.json(specializationschema);
        });
    },

    /**
     * specializationschemaController.create()
     */
    create: function (req, res) {
        var specializationschema = new SpecializationschemaModel({
			title : req.body.title,
			description : req.body.description,
			createdat : req.body.createdat,
			createdby : req.body.createdby,
			modifiedby : req.body.modifiedby,
			modifiedat : req.body.modifiedat,
			id : req.body.id,
			status : req.body.status
        });

        specializationschema.save(function (err, specializationschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating specializationschema',
                    error: err
                });
            }

            return res.status(201).json(specializationschema);
        });
    },

    /**
     * specializationschemaController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        SpecializationschemaModel.findOne({_id: id}, function (err, specializationschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting specializationschema',
                    error: err
                });
            }

            if (!specializationschema) {
                return res.status(404).json({
                    message: 'No such specializationschema'
                });
            }

            specializationschema.title = req.body.title ? req.body.title : specializationschema.title;
			specializationschema.description = req.body.description ? req.body.description : specializationschema.description;
			specializationschema.createdat = req.body.createdat ? req.body.createdat : specializationschema.createdat;
			specializationschema.createdby = req.body.createdby ? req.body.createdby : specializationschema.createdby;
			specializationschema.modifiedby = req.body.modifiedby ? req.body.modifiedby : specializationschema.modifiedby;
			specializationschema.modifiedat = req.body.modifiedat ? req.body.modifiedat : specializationschema.modifiedat;
			specializationschema.id = req.body.id ? req.body.id : specializationschema.id;
			specializationschema.status = req.body.status ? req.body.status : specializationschema.status;
			
            specializationschema.save(function (err, specializationschema) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating specializationschema.',
                        error: err
                    });
                }

                return res.json(specializationschema);
            });
        });
    },

    /**
     * specializationschemaController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        SpecializationschemaModel.findByIdAndRemove(id, function (err, specializationschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the specializationschema.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
