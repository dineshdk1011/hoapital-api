var ReferralschemaModel = require('../models/ReferralSchemaModel.js');

/**
 * ReferralSchemaController.js
 *
 * @description :: Server-side logic for managing ReferralSchemas.
 */
module.exports = {

    /**
     * ReferralSchemaController.list()
     */
    list: function (req, res) {
        ReferralschemaModel.find(function (err, ReferralSchemas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting ReferralSchema.',
                    error: err
                });
            }

            return res.json(ReferralSchemas);
        });
    },

    /**
     * ReferralSchemaController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        ReferralschemaModel.findOne({_id: id}, function (err, ReferralSchema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting ReferralSchema.',
                    error: err
                });
            }

            if (!ReferralSchema) {
                return res.status(404).json({
                    message: 'No such ReferralSchema'
                });
            }

            return res.json(ReferralSchema);
        });
    },

    /**
     * ReferralSchemaController.create()
     */
    create: function (req, res) {
        var ReferralSchema = new ReferralschemaModel({
			title : req.body.title,
			description : req.body.description,
			createdat : req.body.createdat,
			createdby : req.body.createdby,
			modifiedby : req.body.modifiedby,
			modifiedat : req.body.modifiedat,
			id : req.body.id,
			informationflag : req.body.informationflag,
			status : req.body.status
        });

        ReferralSchema.save(function (err, ReferralSchema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating ReferralSchema',
                    error: err
                });
            }

            return res.status(201).json(ReferralSchema);
        });
    },

    /**
     * ReferralSchemaController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        ReferralschemaModel.findOne({_id: id}, function (err, ReferralSchema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting ReferralSchema',
                    error: err
                });
            }

            if (!ReferralSchema) {
                return res.status(404).json({
                    message: 'No such ReferralSchema'
                });
            }

            ReferralSchema.title = req.body.title ? req.body.title : ReferralSchema.title;
			ReferralSchema.description = req.body.description ? req.body.description : ReferralSchema.description;
			ReferralSchema.createdat = req.body.createdat ? req.body.createdat : ReferralSchema.createdat;
			ReferralSchema.createdby = req.body.createdby ? req.body.createdby : ReferralSchema.createdby;
			ReferralSchema.modifiedby = req.body.modifiedby ? req.body.modifiedby : ReferralSchema.modifiedby;
			ReferralSchema.modifiedat = req.body.modifiedat ? req.body.modifiedat : ReferralSchema.modifiedat;
			ReferralSchema.id = req.body.id ? req.body.id : ReferralSchema.id;
			ReferralSchema.informationflag = req.body.informationflag ? req.body.informationflag : ReferralSchema.informationflag;
			ReferralSchema.status = req.body.status ? req.body.status : ReferralSchema.status;
			
            ReferralSchema.save(function (err, ReferralSchema) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating ReferralSchema.',
                        error: err
                    });
                }

                return res.json(ReferralSchema);
            });
        });
    },

    /**
     * ReferralSchemaController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        ReferralschemaModel.findByIdAndRemove(id, function (err, ReferralSchema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the ReferralSchema.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
