var NotificationchannelschemaModel = require('../models/notificationchannelschemaModel.js');

/**
 * notificationchannelschemaController.js
 *
 * @description :: Server-side logic for managing notificationchannelschemas.
 */
module.exports = {

    /**
     * notificationchannelschemaController.list()
     */
    list: function (req, res) {
        NotificationchannelschemaModel.find(function (err, notificationchannelschemas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting notificationchannelschema.',
                    error: err
                });
            }

            return res.json(notificationchannelschemas);
        });
    },

    /**
     * notificationchannelschemaController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        NotificationchannelschemaModel.findOne({_id: id}, function (err, notificationchannelschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting notificationchannelschema.',
                    error: err
                });
            }

            if (!notificationchannelschema) {
                return res.status(404).json({
                    message: 'No such notificationchannelschema'
                });
            }

            return res.json(notificationchannelschema);
        });
    },

    /**
     * notificationchannelschemaController.create()
     */
    create: function (req, res) {
        var notificationchannelschema = new NotificationchannelschemaModel({
			title : req.body.title,
			description : req.body.description,
			createdat : req.body.createdat,
			createdby : req.body.createdby,
			modifiedby : req.body.modifiedby,
			modifiedat : req.body.modifiedat,
			id : req.body.id,
			status : req.body.status
        });

        notificationchannelschema.save(function (err, notificationchannelschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating notificationchannelschema',
                    error: err
                });
            }

            return res.status(201).json(notificationchannelschema);
        });
    },

    /**
     * notificationchannelschemaController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        NotificationchannelschemaModel.findOne({_id: id}, function (err, notificationchannelschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting notificationchannelschema',
                    error: err
                });
            }

            if (!notificationchannelschema) {
                return res.status(404).json({
                    message: 'No such notificationchannelschema'
                });
            }

            notificationchannelschema.title = req.body.title ? req.body.title : notificationchannelschema.title;
			notificationchannelschema.description = req.body.description ? req.body.description : notificationchannelschema.description;
			notificationchannelschema.createdat = req.body.createdat ? req.body.createdat : notificationchannelschema.createdat;
			notificationchannelschema.createdby = req.body.createdby ? req.body.createdby : notificationchannelschema.createdby;
			notificationchannelschema.modifiedby = req.body.modifiedby ? req.body.modifiedby : notificationchannelschema.modifiedby;
			notificationchannelschema.modifiedat = req.body.modifiedat ? req.body.modifiedat : notificationchannelschema.modifiedat;
			notificationchannelschema.id = req.body.id ? req.body.id : notificationchannelschema.id;
			notificationchannelschema.status = req.body.status ? req.body.status : notificationchannelschema.status;
			
            notificationchannelschema.save(function (err, notificationchannelschema) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating notificationchannelschema.',
                        error: err
                    });
                }

                return res.json(notificationchannelschema);
            });
        });
    },

    /**
     * notificationchannelschemaController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        NotificationchannelschemaModel.findByIdAndRemove(id, function (err, notificationchannelschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the notificationchannelschema.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
