var DoctordetailschemaModel = require('../models/doctordetailschemaModel.js');

/**
 * doctordetailschemaController.js
 *
 * @description :: Server-side logic for managing doctordetailschemas.
 */
module.exports = {

    /**
     * doctordetailschemaController.list()
     */
    list: function (req, res) {
        DoctordetailschemaModel.find(function (err, doctordetailschemas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting doctordetailschema.',
                    error: err
                });
            }

            return res.json(doctordetailschemas);
        });
    },

    /**
     * doctordetailschemaController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        DoctordetailschemaModel.findOne({_id: id}, function (err, doctordetailschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting doctordetailschema.',
                    error: err
                });
            }

            if (!doctordetailschema) {
                return res.status(404).json({
                    message: 'No such doctordetailschema'
                });
            }

            return res.json(doctordetailschema);
        });
    },

    /**
     * doctordetailschemaController.create()
     */
    create: function (req, res) {
        var doctordetailschema = new DoctordetailschemaModel({
			detailtypeid : req.body.detailtypeid,
			title : req.body.title,
			description : req.body.description,
			detail : req.body.detail,
			doctorid : req.body.doctorid,
			clinicid : req.body.clinicid,
			createdat : req.body.createdat,
			createdby : req.body.createdby,
			modifiedby : req.body.modifiedby,
			modifiedat : req.body.modifiedat,
			id : req.body.id,
			status : req.body.status
        });

        doctordetailschema.save(function (err, doctordetailschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating doctordetailschema',
                    error: err
                });
            }

            return res.status(201).json(doctordetailschema);
        });
    },

    /**
     * doctordetailschemaController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        DoctordetailschemaModel.findOne({_id: id}, function (err, doctordetailschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting doctordetailschema',
                    error: err
                });
            }

            if (!doctordetailschema) {
                return res.status(404).json({
                    message: 'No such doctordetailschema'
                });
            }

            doctordetailschema.detailtypeid = req.body.detailtypeid ? req.body.detailtypeid : doctordetailschema.detailtypeid;
			doctordetailschema.title = req.body.title ? req.body.title : doctordetailschema.title;
			doctordetailschema.description = req.body.description ? req.body.description : doctordetailschema.description;
			doctordetailschema.detail = req.body.detail ? req.body.detail : doctordetailschema.detail;
			doctordetailschema.doctorid = req.body.doctorid ? req.body.doctorid : doctordetailschema.doctorid;
			doctordetailschema.clinicid = req.body.clinicid ? req.body.clinicid : doctordetailschema.clinicid;
			doctordetailschema.createdat = req.body.createdat ? req.body.createdat : doctordetailschema.createdat;
			doctordetailschema.createdby = req.body.createdby ? req.body.createdby : doctordetailschema.createdby;
			doctordetailschema.modifiedby = req.body.modifiedby ? req.body.modifiedby : doctordetailschema.modifiedby;
			doctordetailschema.modifiedat = req.body.modifiedat ? req.body.modifiedat : doctordetailschema.modifiedat;
			doctordetailschema.id = req.body.id ? req.body.id : doctordetailschema.id;
			doctordetailschema.status = req.body.status ? req.body.status : doctordetailschema.status;
			
            doctordetailschema.save(function (err, doctordetailschema) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating doctordetailschema.',
                        error: err
                    });
                }

                return res.json(doctordetailschema);
            });
        });
    },

    /**
     * doctordetailschemaController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        DoctordetailschemaModel.findByIdAndRemove(id, function (err, doctordetailschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the doctordetailschema.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
