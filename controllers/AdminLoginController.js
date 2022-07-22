var AdminModel = require('../models/AdminLoginModel');
const bcrypt = require('bcryptjs');
const secret = "4641316895";
const jwt = require('jsonwebtoken')

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
        AdminModel.find(function (err, Users) {
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

        AdminModel.findOne({ _id: id }, function (err, User) {
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

    login: async function (req, res) {
     
        let user = await AdminModel.findOne({ email: req.body.email,role:req.body.role });
        if (user) {
            let passwordresult = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if (passwordresult == true) {
                let token = jwt.sign({ userid: user._id }, secret, { expiresIn: "8h" });
                res.json({ token, user });
            } else {
                res.send("Wrong Password.. Please Check")
            }
        } else {
            res.send("User Not Found.. Please Check")
        }
    },


    jwtauthendicate: async function (req, res) {
        if (req.body.token) {
            try {
                let result = jwt.verify(req.body.token, secret);
                res.send(result)
            } catch (error) {
                res.send("token expired")
            }
        } else {
            res.status(401).json({ message: "not authorized" });
        }
    },
    /**
     * UserController.create()
     */
    create: function (req, res) {
       
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);
        var User = new AdminModel({
            name: req.body.name,
            middlename: req.body.middlename,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            phonenumber: req.body.phonenumber,
            genderid: req.body.genderid,
            photo: req.body.photo,
            email: req.body.email,
            dob: req.body.dob,
            password: hash,
            role: req.body.role,
            createdby: req.body.createdby,
            modifiedby: req.body.modifiedby,
            modifiedat: req.body.modifiedat,
            userid: req.body.userid,
        });

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
    update: function (req, res) {
        var id = req.params.id;
    
        AdminModel.findOne({ _id: id }, function (err, User) {
            if (err) {
                console.log(err)
                return res.status(500).json({
                    message: 'Error when getting User',
                    error: err
                });
            }

            if (!User) {
                return res.status(404).json({
                    message: 'No such User'
                });
            }

            User.name = req.body.name ? req.body.name : User.name;
            User.firstname = req.body.firstname ? req.body.firstname : User.firstname;
            User.lastname = req.body.lastname ? req.body.lastname : User.lastname;
            User.middlename = req.body.middlename ? req.body.middlename : User.middlename;
            User.phonenumber = req.body.phonenumber ? req.body.phonenumber : User.phonenumber;
            User.genderid = req.body.genderid ? req.body.genderid : User.genderid;
            User.photo = req.body.photo ? req.body.photo : User.photo;
            User.email = req.body.email ? req.body.email : User.email;
            User.dob = req.body.dob ? req.body.dob : User.dob;
            User.role = req.body.role ? req.body.role : User.role;
            User.createdby = req.body.createdby ? req.body.createdby : User.createdby;
            User.modifiedby = req.body.modifiedby ? req.body.modifiedby : User.modifiedby;
            User.modifiedat = req.body.modifiedat ? req.body.modifiedat : User.modifiedat;
            User.userid = req.body.userid ? req.body.userid : User.userid;
            User.save(function (err, User) {
                if (err) {
                    console.log(err)
                    return res.status(500).json({
                        message: 'Error when updating User.',
                        error: err
                    });
                }

                return res.json(User);
            });
        });
    },

    /**
     * UserController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        AdminModel.findByIdAndRemove(id, function (err, User) {
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
