var DocumenttypeschemaModel = require('../models/documenttypeschemaModel.js');

/**
 * documenttypeschemaController.js
 *
 * @description :: Server-side logic for managing documenttypeschemas.
 */
module.exports = {

    /**
     * documenttypeschemaController.list()
     */
    list: function (req, res) {
        DocumenttypeschemaModel.find(function (err, documenttypeschemas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting documenttypeschema.',
                    error: err
                });
            }

            return res.json(documenttypeschemas);
        });
    },

    /**
     * documenttypeschemaController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        DocumenttypeschemaModel.findOne({_id: id}, function (err, documenttypeschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting documenttypeschema.',
                    error: err
                });
            }

            if (!documenttypeschema) {
                return res.status(404).json({
                    message: 'No such documenttypeschema'
                });
            }

            return res.json(documenttypeschema);
        });
    },

    /**
     * documenttypeschemaController.create()
     */
    create: function (req, res) {
        var documenttypeschema = new DocumenttypeschemaModel({
			title : req.body.title,
			description : req.body.description,
			createdat : req.body.createdat,
			createdby : req.body.createdby,
			modifiedby : req.body.modifiedby,
			modifiedat : req.body.modifiedat,
			id : req.body.id,
			validation : req.body.validation,
			status : req.body.status
        });

        documenttypeschema.save(function (err, documenttypeschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating documenttypeschema',
                    error: err
                });
            }

            return res.status(201).json(documenttypeschema);
        });
    },

    /**
     * documenttypeschemaController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        DocumenttypeschemaModel.findOne({_id: id}, function (err, documenttypeschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting documenttypeschema',
                    error: err
                });
            }

            if (!documenttypeschema) {
                return res.status(404).json({
                    message: 'No such documenttypeschema'
                });
            }

            documenttypeschema.title = req.body.title ? req.body.title : documenttypeschema.title;
			documenttypeschema.description = req.body.description ? req.body.description : documenttypeschema.description;
			documenttypeschema.createdat = req.body.createdat ? req.body.createdat : documenttypeschema.createdat;
			documenttypeschema.createdby = req.body.createdby ? req.body.createdby : documenttypeschema.createdby;
			documenttypeschema.modifiedby = req.body.modifiedby ? req.body.modifiedby : documenttypeschema.modifiedby;
			documenttypeschema.modifiedat = req.body.modifiedat ? req.body.modifiedat : documenttypeschema.modifiedat;
			documenttypeschema.id = req.body.id ? req.body.id : documenttypeschema.id;
			documenttypeschema.validation = req.body.validation ? req.body.validation : documenttypeschema.validation;
			documenttypeschema.status = req.body.status ? req.body.status : documenttypeschema.status;
			
            documenttypeschema.save(function (err, documenttypeschema) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating documenttypeschema.',
                        error: err
                    });
                }

                return res.json(documenttypeschema);
            });
        });
    },

    /**
     * documenttypeschemaController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        DocumenttypeschemaModel.findByIdAndRemove(id, function (err, documenttypeschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the documenttypeschema.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
