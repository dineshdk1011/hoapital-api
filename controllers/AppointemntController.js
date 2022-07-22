var AppointmentModel = require('../models/AppointmentModel');

/**
 * UserController.js
 *
 * @description :: Server-side logic for managing Users.
 */
module.exports = {

    /**
     * UserController.list()
     */
    list: function (req, res) {
        AppointmentModel.find(function (err, Users) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting User.',
                    error: err
                });
            }

            return res.json(Users);
        });
    },

    /**
     * UserController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        AppointmentModel.findOne({ _id: id }, function (err, User) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting User.',
                    error: err
                });
            }

            if (!User) {
                return res.status(404).json({
                    message: 'No such User'
                });
            }

            return res.json(User);
        });
    },
    showbyid: function (req, res) {
        var id = req.params.doctorid;
        AppointmentModel.find({ doctorid: id }, function (err, User) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting User.',
                    error: err
                });
            }

            if (!User) {
                return res.status(404).json({
                    message: 'No such User'
                });
            }

            return res.json(User);
        });
    },
    showbypatient: function (req, res) {
        var id = req.params.patientid;
        AppointmentModel.find({ patientid: id }, function (err, User) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting User.',
                    error: err
                });
            }

            if (!User) {
                return res.status(404).json({
                    message: 'No such User'
                });
            }

            return res.json(User);
        });
    },


    /**
     * UserController.create()
     */
    create: function (req, res) {
        console.log(req.body);
        var User = new AppointmentModel(req.body);
        User.save(function (err, User) {
            if (err) {
                console.log(err)
                return res.status(500).json({
                    message: 'Error when creating User',
                    error: err
                });
            }

            return res.status(201).json(User);
        });
    },

    /**
     * UserController.update()
     */
    update: async function (req, res) {
        var id = req.params.id;
        var update = await AppointmentModel.updateMany({ "_id": id }, { $set: req.body }).then((res) => { return res }).catch((err) => { throw err.message })
        if (update !== null) {
            return res.send(true)
        }
    },

    /**
     * UserController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        AppointmentModel.findByIdAndRemove(id, function (err, User) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the User.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
