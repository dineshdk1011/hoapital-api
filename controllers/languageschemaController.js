var LanguageschemaModel = require('../models/languageschemaModel.js');

/**
 * languageschemaController.js
 *
 * @description :: Server-side logic for managing languageschemas.
 */
module.exports = {

    /**
     * languageschemaController.list()
     */
    list: function (req, res) {
        LanguageschemaModel.find(function (err, languageschemas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting languageschema.',
                    error: err
                });
            }

            return res.json(languageschemas);
        });
    },

    /**
     * languageschemaController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        LanguageschemaModel.findOne({_id: id}, function (err, languageschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting languageschema.',
                    error: err
                });
            }

            if (!languageschema) {
                return res.status(404).json({
                    message: 'No such languageschema'
                });
            }

            return res.json(languageschema);
        });
    },

    /**
     * languageschemaController.create()
     */
    create: function (req, res) {
        var languageschema = new LanguageschemaModel({
			title : req.body.title,
			description : req.body.description,
			createdat : req.body.createdat,
			createdby : req.body.createdby,
			modifiedby : req.body.modifiedby,
			modifiedat : req.body.modifiedat,
			id : req.body.id,
			status : req.body.status
        });

        languageschema.save(function (err, languageschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating languageschema',
                    error: err
                });
            }

            return res.status(201).json(languageschema);
        });
    },

    /**
     * languageschemaController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        LanguageschemaModel.findOne({_id: id}, function (err, languageschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting languageschema',
                    error: err
                });
            }

            if (!languageschema) {
                return res.status(404).json({
                    message: 'No such languageschema'
                });
            }

            languageschema.title = req.body.title ? req.body.title : languageschema.title;
			languageschema.description = req.body.description ? req.body.description : languageschema.description;
			languageschema.createdat = req.body.createdat ? req.body.createdat : languageschema.createdat;
			languageschema.createdby = req.body.createdby ? req.body.createdby : languageschema.createdby;
			languageschema.modifiedby = req.body.modifiedby ? req.body.modifiedby : languageschema.modifiedby;
			languageschema.modifiedat = req.body.modifiedat ? req.body.modifiedat : languageschema.modifiedat;
			languageschema.id = req.body.id ? req.body.id : languageschema.id;
			languageschema.status = req.body.status ? req.body.status : languageschema.status;
			
            languageschema.save(function (err, languageschema) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating languageschema.',
                        error: err
                    });
                }

                return res.json(languageschema);
            });
        });
    },

    /**
     * languageschemaController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        LanguageschemaModel.findByIdAndRemove(id, function (err, languageschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the languageschema.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
