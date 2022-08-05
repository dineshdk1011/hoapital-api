var PdrugmasterModel = require('../models/Pdrugmastermodel');

/**
 * drugController.js
 *
 * @description :: Server-side logic for managing drugs.
 */
module.exports = {

    /**
     * drugController.list()
     */
    list: function (req, res) {
        PdrugmasterModel.find(function (err, drugs) {

            if (err) {
                return res.status(500).json({
                    message: 'Error when getting drug.',
                    error: err
                });
            }

            return res.json(drugs);
        });
    },

    /**
     * drugController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        PdrugmasterModel.find({ _id: id }, function (err, drug) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting drug.',
                    error: err
                });
            }

            if (!drug) {
                return res.status(404).json({
                    message: 'No such drug'
                });
            }

            return res.json(drug);
        });
    },

    /**
     * drugController.create()
     */
    create: function (req, res) {
        var drug = new PdrugmasterModel(req.body);
        console.log(drug);

        drug.save(function (err, drug) {
            console.log(err);

            if (err) {
                console.log(err)
                return res.status(500).json({
                    message: 'Error when creating drug',
                    error: err
                });
            }

            return res.status(201).json(drug);
        });
    },

    /**
     * drugController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        PdrugmasterModel.findOne({ _id: id }, function (err, drug) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting drug',
                    error: err
                });
            }

            if (!drug) {
                return res.status(404).json({
                    message: 'No such drug'
                });
            }

            drug.name = req.body.name ? req.body.name : drug.name;
            drug.brand = req.body.brand ? req.body.brand : drug.brand;
            drug.price = req.body.price ? req.body.price : drug.price;
            drug.description = req.body.description ? req.body.description : drug.description;
            drug.classification = req.body.classification ? req.body.classification : drug.classification;
            drug.sku = req.body.sku ? req.body.sku : drug.sku;
            drug.stock = req.body.stock ? req.body.stock : drug.stock;
            drug.vendor = req.body.vendor ? req.body.vendor : drug.vendor;
            drug.batch = req.body.batch ? req.body.batch : drug.batch;
            drug.expiry = req.body.expiry ? req.body.expiry : drug.expiry;
            drug.doss = req.body.doss ? req.body.doss : drug.doss;
            drug.instruction = req.body.instruction ? req.body.instruction : drug.instruction;
            drug.salt = req.body.salt ? req.body.salt : drug.salt;
            drug.dossvale = req.body.dossvale ? req.body.dossvale : drug.dossvale;
            drug.stockvalue = req.body.stockvalue ? req.body.stockvalue : drug.stockvalue;
            drug.save(function (err, drug) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating drug.',
                        error: err
                    });
                }

                return res.json(drug);
            });
        });
    },

    /**
     * drugController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        PdrugmasterModel.findByIdAndRemove(id, function (err, drug) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the drug.',
                    error: err
                });
            }

            return res.status(204).json(true);
        });
    }
};
