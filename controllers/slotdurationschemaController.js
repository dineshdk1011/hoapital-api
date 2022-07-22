var SlotdurationschemaModel = require('../models/slotdurationschemaModel.js');

/**
 * slotdurationschemaController.js
 *
 * @description :: Server-side logic for managing slotdurationschemas.
 */
module.exports = {

    /**
     * slotdurationschemaController.list()
     */
    list: function (req, res) {
        SlotdurationschemaModel.find(function (err, slotdurationschemas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting slotdurationschema.',
                    error: err
                });
            }

            return res.json(slotdurationschemas);
        });
    },

    /**
     * slotdurationschemaController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        SlotdurationschemaModel.findOne({_id: id}, function (err, slotdurationschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting slotdurationschema.',
                    error: err
                });
            }

            if (!slotdurationschema) {
                return res.status(404).json({
                    message: 'No such slotdurationschema'
                });
            }

            return res.json(slotdurationschema);
        });
    },

    /**
     * slotdurationschemaController.create()
     */
    create: function (req, res) {
        var slotdurationschema = new SlotdurationschemaModel({
			title : req.body.title,
			duration : req.body.duration,
			description : req.body.description,
			createdat : req.body.createdat,
			createdby : req.body.createdby,
			modifiedby : req.body.modifiedby,
			modifiedat : req.body.modifiedat,
			id : req.body.id,
			status : req.body.status
        });

        slotdurationschema.save(function (err, slotdurationschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating slotdurationschema',
                    error: err
                });
            }

            return res.status(201).json(slotdurationschema);
        });
    },

    /**
     * slotdurationschemaController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        SlotdurationschemaModel.findOne({_id: id}, function (err, slotdurationschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting slotdurationschema',
                    error: err
                });
            }

            if (!slotdurationschema) {
                return res.status(404).json({
                    message: 'No such slotdurationschema'
                });
            }

            slotdurationschema.title = req.body.title ? req.body.title : slotdurationschema.title;
			slotdurationschema.duration = req.body.duration ? req.body.duration : slotdurationschema.duration;
			slotdurationschema.description = req.body.description ? req.body.description : slotdurationschema.description;
			slotdurationschema.createdat = req.body.createdat ? req.body.createdat : slotdurationschema.createdat;
			slotdurationschema.createdby = req.body.createdby ? req.body.createdby : slotdurationschema.createdby;
			slotdurationschema.modifiedby = req.body.modifiedby ? req.body.modifiedby : slotdurationschema.modifiedby;
			slotdurationschema.modifiedat = req.body.modifiedat ? req.body.modifiedat : slotdurationschema.modifiedat;
			slotdurationschema.id = req.body.id ? req.body.id : slotdurationschema.id;
			slotdurationschema.status = req.body.status ? req.body.status : slotdurationschema.status;
			
            slotdurationschema.save(function (err, slotdurationschema) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating slotdurationschema.',
                        error: err
                    });
                }

                return res.json(slotdurationschema);
            });
        });
    },

    /**
     * slotdurationschemaController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        SlotdurationschemaModel.findByIdAndRemove(id, function (err, slotdurationschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the slotdurationschema.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
