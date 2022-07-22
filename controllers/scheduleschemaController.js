var ScheduleschemaModel = require('../models/scheduleschemaModel.js');

/**
 * scheduleschemaController.js
 *
 * @description :: Server-side logic for managing scheduleschemas.
 */
module.exports = {

    /**
     * scheduleschemaController.list()
     */
    list: function (req, res) {
        ScheduleschemaModel.find(function (err, scheduleschemas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting scheduleschema.',
                    error: err
                });
            }

            return res.json(scheduleschemas);
        });
    },

    /**
     * scheduleschemaController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        ScheduleschemaModel.findOne({_id: id}, function (err, scheduleschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting scheduleschema.',
                    error: err
                });
            }

            if (!scheduleschema) {
                return res.status(404).json({
                    message: 'No such scheduleschema'
                });
            }

            return res.json(scheduleschema);
        });
    },

    /**
     * scheduleschemaController.create()
     */
    create: function (req, res) {
        var scheduleschema = new ScheduleschemaModel({
			scheduletypeid : req.body.scheduletypeid,
			title : req.body.title,
			description : req.body.description,
			reason : req.body.reason,
			procedureid : req.body.procedureid,
			starttime : req.body.starttime,
			duration : req.body.duration,
			startsat : req.body.startsat,
			endsat : req.body.endsat,
			isregular : req.body.isregular,
			clinicid : req.body.clinicid,
			doctorid : req.body.doctorid,
			patientid : req.body.patientid,
			createdat : req.body.createdat,
			createdby : req.body.createdby,
			modifiedby : req.body.modifiedby,
			modifiedat : req.body.modifiedat,
			id : req.body.id,
			status : req.body.status
        });

        scheduleschema.save(function (err, scheduleschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating scheduleschema',
                    error: err
                });
            }

            return res.status(201).json(scheduleschema);
        });
    },

    /**
     * scheduleschemaController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        ScheduleschemaModel.findOne({_id: id}, function (err, scheduleschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting scheduleschema',
                    error: err
                });
            }

            if (!scheduleschema) {
                return res.status(404).json({
                    message: 'No such scheduleschema'
                });
            }

            scheduleschema.scheduletypeid = req.body.scheduletypeid ? req.body.scheduletypeid : scheduleschema.scheduletypeid;
			scheduleschema.title = req.body.title ? req.body.title : scheduleschema.title;
			scheduleschema.description = req.body.description ? req.body.description : scheduleschema.description;
			scheduleschema.reason = req.body.reason ? req.body.reason : scheduleschema.reason;
			scheduleschema.procedureid = req.body.procedureid ? req.body.procedureid : scheduleschema.procedureid;
			scheduleschema.starttime = req.body.starttime ? req.body.starttime : scheduleschema.starttime;
			scheduleschema.duration = req.body.duration ? req.body.duration : scheduleschema.duration;
			scheduleschema.startsat = req.body.startsat ? req.body.startsat : scheduleschema.startsat;
			scheduleschema.endsat = req.body.endsat ? req.body.endsat : scheduleschema.endsat;
			scheduleschema.isregular = req.body.isregular ? req.body.isregular : scheduleschema.isregular;
			scheduleschema.clinicid = req.body.clinicid ? req.body.clinicid : scheduleschema.clinicid;
			scheduleschema.doctorid = req.body.doctorid ? req.body.doctorid : scheduleschema.doctorid;
			scheduleschema.patientid = req.body.patientid ? req.body.patientid : scheduleschema.patientid;
			scheduleschema.createdat = req.body.createdat ? req.body.createdat : scheduleschema.createdat;
			scheduleschema.createdby = req.body.createdby ? req.body.createdby : scheduleschema.createdby;
			scheduleschema.modifiedby = req.body.modifiedby ? req.body.modifiedby : scheduleschema.modifiedby;
			scheduleschema.modifiedat = req.body.modifiedat ? req.body.modifiedat : scheduleschema.modifiedat;
			scheduleschema.id = req.body.id ? req.body.id : scheduleschema.id;
			scheduleschema.status = req.body.status ? req.body.status : scheduleschema.status;
			
            scheduleschema.save(function (err, scheduleschema) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating scheduleschema.',
                        error: err
                    });
                }

                return res.json(scheduleschema);
            });
        });
    },

    /**
     * scheduleschemaController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        ScheduleschemaModel.findByIdAndRemove(id, function (err, scheduleschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the scheduleschema.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
