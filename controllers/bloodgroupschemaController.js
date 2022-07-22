var BloodgroupschemaModel = require('../models/bloodgroupschemaModel.js');

/**
 * bloodgroupschemaController.js
 *
 * @description :: Server-side logic for managing bloodgroupschemas.
 */
module.exports = {

    /**
     * bloodgroupschemaController.list()
     */
    list: function (req, res) {
        BloodgroupschemaModel.find(function (err, bloodgroupschemas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting bloodgroupschema.',
                    error: err
                });
            }

            return res.json(bloodgroupschemas);
        });
    },

    /**
     * bloodgroupschemaController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        BloodgroupschemaModel.findOne({_id: id}, function (err, bloodgroupschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting bloodgroupschema.',
                    error: err
                });
            }

            if (!bloodgroupschema) {
                return res.status(404).json({
                    message: 'No such bloodgroupschema'
                });
            }

            return res.json(bloodgroupschema);
        });
    },

    /**
     * bloodgroupschemaController.create()
     */
    create: function (req, res) {
        var bloodgroupschema = new BloodgroupschemaModel({
			title : req.body.title,
			description : req.body.description,
			createdat : req.body.createdat,
			createdby : req.body.createdby,
			modifiedby : req.body.modifiedby,
			modifiedat : req.body.modifiedat,
			id : req.body.id,
			status : req.body.status
        });

        bloodgroupschema.save(function (err, bloodgroupschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating bloodgroupschema',
                    error: err
                });
            }

            return res.status(201).json(bloodgroupschema);
        });
    },

    /**
     * bloodgroupschemaController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        BloodgroupschemaModel.findOne({_id: id}, function (err, bloodgroupschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting bloodgroupschema',
                    error: err
                });
            }

            if (!bloodgroupschema) {
                return res.status(404).json({
                    message: 'No such bloodgroupschema'
                });
            }

            bloodgroupschema.title = req.body.title ? req.body.title : bloodgroupschema.title;
			bloodgroupschema.description = req.body.description ? req.body.description : bloodgroupschema.description;
			bloodgroupschema.createdat = req.body.createdat ? req.body.createdat : bloodgroupschema.createdat;
			bloodgroupschema.createdby = req.body.createdby ? req.body.createdby : bloodgroupschema.createdby;
			bloodgroupschema.modifiedby = req.body.modifiedby ? req.body.modifiedby : bloodgroupschema.modifiedby;
			bloodgroupschema.modifiedat = req.body.modifiedat ? req.body.modifiedat : bloodgroupschema.modifiedat;
			bloodgroupschema.id = req.body.id ? req.body.id : bloodgroupschema.id;
			bloodgroupschema.status = req.body.status ? req.body.status : bloodgroupschema.status;
			
            bloodgroupschema.save(function (err, bloodgroupschema) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating bloodgroupschema.',
                        error: err
                    });
                }

                return res.json(bloodgroupschema);
            });
        });
    },

    /**
     * bloodgroupschemaController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        BloodgroupschemaModel.findByIdAndRemove(id, function (err, bloodgroupschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the bloodgroupschema.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
