var DocumentdetailschemaModel = require('../models/documentdetailschemaModel.js');

/**
 * documentdetailschemaController.js
 *
 * @description :: Server-side logic for managing documentdetailschemas.
 */
module.exports = {

    /**
     * documentdetailschemaController.list()
     */
    list: function (req, res) {
        DocumentdetailschemaModel.find(function (err, documentdetailschemas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting documentdetailschema.',
                    error: err
                });
            }

            return res.json(documentdetailschemas);
        });
    },

    /**
     * documentdetailschemaController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        DocumentdetailschemaModel.findOne({_id: id}, function (err, documentdetailschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting documentdetailschema.',
                    error: err
                });
            }

            if (!documentdetailschema) {
                return res.status(404).json({
                    message: 'No such documentdetailschema'
                });
            }

            return res.json(documentdetailschema);
        });
    },

    /**
     * documentdetailschemaController.create()
     */
    create: function (req, res) {
        var documentdetailschema = new DocumentdetailschemaModel({
			documenttypeid : req.body.documenttypeid,
			title : req.body.title,
			description : req.body.description,
			documentdetails : req.body.documentdetails,
			createdat : req.body.createdat,
			createdby : req.body.createdby,
			modifiedby : req.body.modifiedby,
			modifiedat : req.body.modifiedat,
			id : req.body.id,
			doctorid : req.body.doctorid,
			clinicid : req.body.clinicid,
			patientid : req.body.patientid,
			status : req.body.status
        });

        documentdetailschema.save(function (err, documentdetailschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating documentdetailschema',
                    error: err
                });
            }

            return res.status(201).json(documentdetailschema);
        });
    },

    /**
     * documentdetailschemaController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        DocumentdetailschemaModel.findOne({_id: id}, function (err, documentdetailschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting documentdetailschema',
                    error: err
                });
            }

            if (!documentdetailschema) {
                return res.status(404).json({
                    message: 'No such documentdetailschema'
                });
            }

            documentdetailschema.documenttypeid = req.body.documenttypeid ? req.body.documenttypeid : documentdetailschema.documenttypeid;
			documentdetailschema.title = req.body.title ? req.body.title : documentdetailschema.title;
			documentdetailschema.description = req.body.description ? req.body.description : documentdetailschema.description;
			documentdetailschema.documentdetails = req.body.documentdetails ? req.body.documentdetails : documentdetailschema.documentdetails;
			documentdetailschema.createdat = req.body.createdat ? req.body.createdat : documentdetailschema.createdat;
			documentdetailschema.createdby = req.body.createdby ? req.body.createdby : documentdetailschema.createdby;
			documentdetailschema.modifiedby = req.body.modifiedby ? req.body.modifiedby : documentdetailschema.modifiedby;
			documentdetailschema.modifiedat = req.body.modifiedat ? req.body.modifiedat : documentdetailschema.modifiedat;
			documentdetailschema.id = req.body.id ? req.body.id : documentdetailschema.id;
			documentdetailschema.doctorid = req.body.doctorid ? req.body.doctorid : documentdetailschema.doctorid;
			documentdetailschema.clinicid = req.body.clinicid ? req.body.clinicid : documentdetailschema.clinicid;
			documentdetailschema.patientid = req.body.patientid ? req.body.patientid : documentdetailschema.patientid;
			documentdetailschema.status = req.body.status ? req.body.status : documentdetailschema.status;
			
            documentdetailschema.save(function (err, documentdetailschema) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating documentdetailschema.',
                        error: err
                    });
                }

                return res.json(documentdetailschema);
            });
        });
    },

    /**
     * documentdetailschemaController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        DocumentdetailschemaModel.findByIdAndRemove(id, function (err, documentdetailschema) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the documentdetailschema.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
