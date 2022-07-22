var ScheduletypeschemaModel = require('../models/scheduletypeschemaModel.js');

/**
 * scheduletypeschemaController.js
 *
 * @description :: Server-side logic for managing scheduletypeschemas.
 */
module.exports = {

    /**
     * scheduletypeschemaController.list()
     */
    list: function (req, res) {
        ScheduletypeschemaModel.find(function (err, scheduletypeschemas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting scheduletypeschema.',
                    error: err
                });
            }

            return res.json(scheduletypeschemas);
        });
    },

    /**
     * scheduletypeschemaController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        ScheduletypeschemaModel.findOne({_id: id}, function (err, scheduletypeschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting scheduletypeschema.',
                    error: err
                });
            }

            if (!scheduletypeschema) {
                return res.status(404).json({
                    message: 'No such scheduletypeschema'
                });
            }

            return res.json(scheduletypeschema);
        });
    },

    /**
     * scheduletypeschemaController.create()
     */
    create: function (req, res) {
        var scheduletypeschema = new ScheduletypeschemaModel({
			title : req.body.title,
			description : req.body.description,
			createdat : req.body.createdat,
			createdby : req.body.createdby,
			modifiedby : req.body.modifiedby,
			modifiedat : req.body.modifiedat,
			id : req.body.id,
			status : req.body.status
        });

        scheduletypeschema.save(function (err, scheduletypeschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating scheduletypeschema',
                    error: err
                });
            }

            return res.status(201).json(scheduletypeschema);
        });
    },

    /**
     * scheduletypeschemaController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        ScheduletypeschemaModel.findOne({_id: id}, function (err, scheduletypeschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting scheduletypeschema',
                    error: err
                });
            }

            if (!scheduletypeschema) {
                return res.status(404).json({
                    message: 'No such scheduletypeschema'
                });
            }

            scheduletypeschema.title = req.body.title ? req.body.title : scheduletypeschema.title;
			scheduletypeschema.description = req.body.description ? req.body.description : scheduletypeschema.description;
			scheduletypeschema.createdat = req.body.createdat ? req.body.createdat : scheduletypeschema.createdat;
			scheduletypeschema.createdby = req.body.createdby ? req.body.createdby : scheduletypeschema.createdby;
			scheduletypeschema.modifiedby = req.body.modifiedby ? req.body.modifiedby : scheduletypeschema.modifiedby;
			scheduletypeschema.modifiedat = req.body.modifiedat ? req.body.modifiedat : scheduletypeschema.modifiedat;
			scheduletypeschema.id = req.body.id ? req.body.id : scheduletypeschema.id;
			scheduletypeschema.status = req.body.status ? req.body.status : scheduletypeschema.status;
			
            scheduletypeschema.save(function (err, scheduletypeschema) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating scheduletypeschema.',
                        error: err
                    });
                }

                return res.json(scheduletypeschema);
            });
        });
    },

    /**
     * scheduletypeschemaController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        ScheduletypeschemaModel.findByIdAndRemove(id, function (err, scheduletypeschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the scheduletypeschema.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
