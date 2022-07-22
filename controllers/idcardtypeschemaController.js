var IdcardtypeschemaModel = require('../models/idcardtypeschemaModel.js');

/**
 * idcardtypeschemaController.js
 *
 * @description :: Server-side logic for managing idcardtypeschemas.
 */
module.exports = {

    /**
     * idcardtypeschemaController.list()
     */
    list: function (req, res) {
        IdcardtypeschemaModel.find(function (err, idcardtypeschemas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting idcardtypeschema.',
                    error: err
                });
            }

            return res.json(idcardtypeschemas);
        });
    },

    /**
     * idcardtypeschemaController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        IdcardtypeschemaModel.findOne({_id: id}, function (err, idcardtypeschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting idcardtypeschema.',
                    error: err
                });
            }

            if (!idcardtypeschema) {
                return res.status(404).json({
                    message: 'No such idcardtypeschema'
                });
            }

            return res.json(idcardtypeschema);
        });
    },

    /**
     * idcardtypeschemaController.create()
     */
    create: function (req, res) {
        var idcardtypeschema = new IdcardtypeschemaModel({
			title : req.body.title,
			description : req.body.description,
			createdat : req.body.createdat,
			createdby : req.body.createdby,
			modifiedby : req.body.modifiedby,
			modifiedat : req.body.modifiedat,
			id : req.body.id,
			status : req.body.status
        });

        idcardtypeschema.save(function (err, idcardtypeschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating idcardtypeschema',
                    error: err
                });
            }

            return res.status(201).json(idcardtypeschema);
        });
    },

    /**
     * idcardtypeschemaController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        IdcardtypeschemaModel.findOne({_id: id}, function (err, idcardtypeschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting idcardtypeschema',
                    error: err
                });
            }

            if (!idcardtypeschema) {
                return res.status(404).json({
                    message: 'No such idcardtypeschema'
                });
            }

            idcardtypeschema.title = req.body.title ? req.body.title : idcardtypeschema.title;
			idcardtypeschema.description = req.body.description ? req.body.description : idcardtypeschema.description;
			idcardtypeschema.createdat = req.body.createdat ? req.body.createdat : idcardtypeschema.createdat;
			idcardtypeschema.createdby = req.body.createdby ? req.body.createdby : idcardtypeschema.createdby;
			idcardtypeschema.modifiedby = req.body.modifiedby ? req.body.modifiedby : idcardtypeschema.modifiedby;
			idcardtypeschema.modifiedat = req.body.modifiedat ? req.body.modifiedat : idcardtypeschema.modifiedat;
			idcardtypeschema.id = req.body.id ? req.body.id : idcardtypeschema.id;
			idcardtypeschema.status = req.body.status ? req.body.status : idcardtypeschema.status;
			
            idcardtypeschema.save(function (err, idcardtypeschema) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating idcardtypeschema.',
                        error: err
                    });
                }

                return res.json(idcardtypeschema);
            });
        });
    },

    /**
     * idcardtypeschemaController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        IdcardtypeschemaModel.findByIdAndRemove(id, function (err, idcardtypeschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the idcardtypeschema.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
