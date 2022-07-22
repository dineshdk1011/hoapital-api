var DetailtypeschemaModel = require('../models/detailtypeschemaModel.js');

/**
 * detailtypeschemaController.js
 *
 * @description :: Server-side logic for managing detailtypeschemas.
 */
module.exports = {

    /**
     * detailtypeschemaController.list()
     */
    list: function (req, res) {
        DetailtypeschemaModel.find(function (err, detailtypeschemas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting detailtypeschema.',
                    error: err
                });
            }

            return res.json(detailtypeschemas);
        });
    },

    /**
     * detailtypeschemaController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        DetailtypeschemaModel.findOne({_id: id}, function (err, detailtypeschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting detailtypeschema.',
                    error: err
                });
            }

            if (!detailtypeschema) {
                return res.status(404).json({
                    message: 'No such detailtypeschema'
                });
            }

            return res.json(detailtypeschema);
        });
    },

    /**
     * detailtypeschemaController.create()
     */
    create: function (req, res) {
        var detailtypeschema = new DetailtypeschemaModel({
			title : req.body.title,
			description : req.body.description,
			createdat : req.body.createdat,
			createdby : req.body.createdby,
			modifiedby : req.body.modifiedby,
			modifiedat : req.body.modifiedat,
			id : req.body.id,
			status : req.body.status
        });

        detailtypeschema.save(function (err, detailtypeschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating detailtypeschema',
                    error: err
                });
            }

            return res.status(201).json(detailtypeschema);
        });
    },

    /**
     * detailtypeschemaController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        DetailtypeschemaModel.findOne({_id: id}, function (err, detailtypeschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting detailtypeschema',
                    error: err
                });
            }

            if (!detailtypeschema) {
                return res.status(404).json({
                    message: 'No such detailtypeschema'
                });
            }

            detailtypeschema.title = req.body.title ? req.body.title : detailtypeschema.title;
			detailtypeschema.description = req.body.description ? req.body.description : detailtypeschema.description;
			detailtypeschema.createdat = req.body.createdat ? req.body.createdat : detailtypeschema.createdat;
			detailtypeschema.createdby = req.body.createdby ? req.body.createdby : detailtypeschema.createdby;
			detailtypeschema.modifiedby = req.body.modifiedby ? req.body.modifiedby : detailtypeschema.modifiedby;
			detailtypeschema.modifiedat = req.body.modifiedat ? req.body.modifiedat : detailtypeschema.modifiedat;
			detailtypeschema.id = req.body.id ? req.body.id : detailtypeschema.id;
			detailtypeschema.status = req.body.status ? req.body.status : detailtypeschema.status;
			
            detailtypeschema.save(function (err, detailtypeschema) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating detailtypeschema.',
                        error: err
                    });
                }

                return res.json(detailtypeschema);
            });
        });
    },

    /**
     * detailtypeschemaController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        DetailtypeschemaModel.findByIdAndRemove(id, function (err, detailtypeschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the detailtypeschema.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
