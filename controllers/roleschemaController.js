var RoleschemaModel = require('../models/roleschemaModel.js');

/**
 * roleschemaController.js
 *
 * @description :: Server-side logic for managing roleschemas.
 */
module.exports = {

    /**
     * roleschemaController.list()
     */
    list: function (req, res) {
        RoleschemaModel.find(function (err, roleschemas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting roleschema.',
                    error: err
                });
            }

            return res.json(roleschemas);
        });
    },

    /**
     * roleschemaController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        RoleschemaModel.findOne({_id: id}, function (err, roleschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting roleschema.',
                    error: err
                });
            }

            if (!roleschema) {
                return res.status(404).json({
                    message: 'No such roleschema'
                });
            }

            return res.json(roleschema);
        });
    },

    /**
     * roleschemaController.create()
     */
    create: function (req, res) {
        var roleschema = new RoleschemaModel({
			title : req.body.title,
			description : req.body.description,
			createdat : req.body.createdat,
			createdby : req.body.createdby,
			modifiedby : req.body.modifiedby,
			modifiedat : req.body.modifiedat,
			id : req.body.id,
			status : req.body.status
        });

        roleschema.save(function (err, roleschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating roleschema',
                    error: err
                });
            }

            return res.status(201).json(roleschema);
        });
    },

    /**
     * roleschemaController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        RoleschemaModel.findOne({_id: id}, function (err, roleschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting roleschema',
                    error: err
                });
            }

            if (!roleschema) {
                return res.status(404).json({
                    message: 'No such roleschema'
                });
            }

            roleschema.title = req.body.title ? req.body.title : roleschema.title;
			roleschema.description = req.body.description ? req.body.description : roleschema.description;
			roleschema.createdat = req.body.createdat ? req.body.createdat : roleschema.createdat;
			roleschema.createdby = req.body.createdby ? req.body.createdby : roleschema.createdby;
			roleschema.modifiedby = req.body.modifiedby ? req.body.modifiedby : roleschema.modifiedby;
			roleschema.modifiedat = req.body.modifiedat ? req.body.modifiedat : roleschema.modifiedat;
			roleschema.id = req.body.id ? req.body.id : roleschema.id;
			roleschema.status = req.body.status ? req.body.status : roleschema.status;
			
            roleschema.save(function (err, roleschema) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating roleschema.',
                        error: err
                    });
                }

                return res.json(roleschema);
            });
        });
    },

    /**
     * roleschemaController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        RoleschemaModel.findByIdAndRemove(id, function (err, roleschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the roleschema.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
