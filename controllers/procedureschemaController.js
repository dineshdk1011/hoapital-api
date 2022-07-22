var ProcedureschemaModel = require('../models/procedureschemaModel.js');

/**
 * procedureschemaController.js
 *
 * @description :: Server-side logic for managing procedureschemas.
 */
module.exports = {

    /**
     * procedureschemaController.list()
     */
    list: function (req, res) {
        ProcedureschemaModel.find(function (err, procedureschemas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting procedureschema.',
                    error: err
                });
            }

            return res.json(procedureschemas);
        });
    },

    /**
     * procedureschemaController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        ProcedureschemaModel.findOne({_id: id}, function (err, procedureschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting procedureschema.',
                    error: err
                });
            }

            if (!procedureschema) {
                return res.status(404).json({
                    message: 'No such procedureschema'
                });
            }

            return res.json(procedureschema);
        });
    },

    /**
     * procedureschemaController.create()
     */
    create: function (req, res) {
        var procedureschema = new ProcedureschemaModel({
			title : req.body.title,
			description : req.body.description,
			createdat : req.body.createdat,
			createdby : req.body.createdby,
			modifiedby : req.body.modifiedby,
			modifiedat : req.body.modifiedat,
			id : req.body.id,
			status : req.body.status
        });

        procedureschema.save(function (err, procedureschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating procedureschema',
                    error: err
                });
            }

            return res.status(201).json(procedureschema);
        });
    },

    /**
     * procedureschemaController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        ProcedureschemaModel.findOne({_id: id}, function (err, procedureschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting procedureschema',
                    error: err
                });
            }

            if (!procedureschema) {
                return res.status(404).json({
                    message: 'No such procedureschema'
                });
            }

            procedureschema.title = req.body.title ? req.body.title : procedureschema.title;
			procedureschema.description = req.body.description ? req.body.description : procedureschema.description;
			procedureschema.createdat = req.body.createdat ? req.body.createdat : procedureschema.createdat;
			procedureschema.createdby = req.body.createdby ? req.body.createdby : procedureschema.createdby;
			procedureschema.modifiedby = req.body.modifiedby ? req.body.modifiedby : procedureschema.modifiedby;
			procedureschema.modifiedat = req.body.modifiedat ? req.body.modifiedat : procedureschema.modifiedat;
			procedureschema.id = req.body.id ? req.body.id : procedureschema.id;
			procedureschema.status = req.body.status ? req.body.status : procedureschema.status;
			
            procedureschema.save(function (err, procedureschema) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating procedureschema.',
                        error: err
                    });
                }

                return res.json(procedureschema);
            });
        });
    },

    /**
     * procedureschemaController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        ProcedureschemaModel.findByIdAndRemove(id, function (err, procedureschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the procedureschema.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
