var PatientgroupModel = require('../models/PatientGroupModel.js');

/**
 * PatientGroupController.js
 *
 * @description :: Server-side logic for managing PatientGroups.
 */
module.exports = {

    /**
     * PatientGroupController.list()
     */
    list: function (req, res) {
        PatientgroupModel.find(function (err, PatientGroups) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting PatientGroup.',
                    error: err
                });
            }

            return res.json(PatientGroups);
        });
    },

    /**
     * PatientGroupController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        PatientgroupModel.findOne({_id: id}, function (err, PatientGroup) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting PatientGroup.',
                    error: err
                });
            }

            if (!PatientGroup) {
                return res.status(404).json({
                    message: 'No such PatientGroup'
                });
            }

            return res.json(PatientGroup);
        });
    },

    /**
     * PatientGroupController.create()
     */
    create: function (req, res) {
        var PatientGroup = new PatientgroupModel({
			title : req.body.title,
			description : req.body.description,
			createdat : req.body.createdat,
			createdby : req.body.createdby,
			modifiedat : req.body.modifiedat,
			modifiedby : req.body.modifiedby,
			id : req.body.id,
			status : req.body.status
        });

        PatientGroup.save(function (err, PatientGroup) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating PatientGroup',
                    error: err
                });
            }

            return res.status(201).json(PatientGroup);
        });
    },

    /**
     * PatientGroupController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        PatientgroupModel.findOne({_id: id}, function (err, PatientGroup) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting PatientGroup',
                    error: err
                });
            }

            if (!PatientGroup) {
                return res.status(404).json({
                    message: 'No such PatientGroup'
                });
            }

            PatientGroup.title = req.body.title ? req.body.title : PatientGroup.title;
			PatientGroup.description = req.body.description ? req.body.description : PatientGroup.description;
			PatientGroup.createdat = req.body.createdat ? req.body.createdat : PatientGroup.createdat;
			PatientGroup.createdby = req.body.createdby ? req.body.createdby : PatientGroup.createdby;
			PatientGroup.modifiedat = req.body.modifiedat ? req.body.modifiedat : PatientGroup.modifiedat;
			PatientGroup.modifiedby = req.body.modifiedby ? req.body.modifiedby : PatientGroup.modifiedby;
			PatientGroup.id = req.body.id ? req.body.id : PatientGroup.id;
			PatientGroup.status = req.body.status ? req.body.status : PatientGroup.status;
			
            PatientGroup.save(function (err, PatientGroup) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating PatientGroup.',
                        error: err
                    });
                }

                return res.json(PatientGroup);
            });
        });
    },

    /**
     * PatientGroupController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        PatientgroupModel.findByIdAndRemove(id, function (err, PatientGroup) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the PatientGroup.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
