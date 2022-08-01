var clinicDoctors = require("../models/ClinicDoctorsModel");
const bcrypt = require("bcryptjs");
const secret = "4641316895";
const jwt = require("jsonwebtoken");

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
    clinicDoctors.find(function (err, Users) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting User.",
          error: err,
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

    clinicDoctors.findOne({ _id: id }, function (err, User) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting User.",
          error: err,
        });
      }

      if (!User) {
        return res.status(404).json({
          message: "No such User",
        });
      }

      return res.json(User);
    });
  },

  login: async function (req, res) {
    console.log(req.body);
    let user = await clinicDoctors.findOne({
      email: req.body.email,
      rolename: req.body.role,
    });
    console.log(user);
    if (user) {
      let passwordresult = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (passwordresult == true) {
        let token = jwt.sign({ userid: user._id }, secret, { expiresIn: "8h" });
        res.json({ token, user });
      } else {
        res.send("Wrong Password.. Please Check");
      }
    } else {
      res.send("User Not Found.. Please Check");
    }
  },

  jwtauthendicate: async function (req, res) {
    if (req.body.token) {
      try {
        let result = jwt.verify(req.body.token, secret);
        res.send(result);
      } catch (error) {
        res.send("token expired");
      }
    } else {
      res.status(401).json({ message: "not authorized" });
    }
  },
  /**
   * UserController.create()
   */
  create: function (req, res) {
    console.log(req.body);

    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);
    var User = new clinicDoctors({
      name: req.body.name,
      middlename: req.body.middlename,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      phonenumber: req.body.phonenumber,
      genderid: req.body.genderid,
      photo: req.body.photo,
      email: req.body.email,
      dob: req.body.dob,
      age: req.body.age,
      password: hash,
      bloodgroup: req.body.bloodgroup,
      speciality: req.body.speciality,
      rolename: req.body.rolename,
      createdby: req.body.createdby,
      modifiedby: req.body.modifiedby,
      modifiedat: req.body.modifiedat,
      userid: req.body.userid,
      clinicid: req.body.clinicid,
      status: req.body.status,
      color: req.body.color,
      city: req.body.city,
      state: req.body.state,
      pincode: req.body.pincode,
      doctorid: req.body.doctorid,
      cheifdoctor: req.body.cheifdoctor,
      access: req.body.access,
    });

    User.save(function (err, User) {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: "Error when creating User",
          error: err,
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

    clinicDoctors.findOne({ _id: id }, function (err, User) {
      if (err) {
        console.log(User);
        console.log(err);
        return res.status(500).json({
          message: "Error when getting User",
          error: err,
        });
      }

      if (!User) {
        return res.status(404).json({
          message: "No such User",
        });
      }

      User.name = req.body.name ? req.body.name : User.name;
      User.firstname = req.body.firstname ? req.body.firstname : User.firstname;
      User.lastname = req.body.lastname ? req.body.lastname : User.lastname;
      User.middlename = req.body.middlename
        ? req.body.middlename
        : User.middlename;
      User.address = req.body.address ? req.body.address : User.address;
      User.phonenumber = req.body.phonenumber
        ? req.body.phonenumber
        : User.phonenumber;
      User.genderid = req.body.genderid ? req.body.genderid : User.genderid;
      User.photo = req.body.photo ? req.body.photo : User.photo;
      User.email = req.body.email ? req.body.email : User.email;
      User.dob = req.body.dob ? req.body.dob : User.dob;
      User.age = req.body.age ? req.body.age : User.age;
      User.bloodgroup = req.body.bloodgroup
        ? req.body.bloodgroup
        : User.bloodgroup;
      User.speciality = req.body.speciality
        ? req.body.speciality
        : User.speciality;
      User.roleid = req.body.roleid ? req.body.roleid : User.roleid;
      User.rolename = req.body.rolename ? req.body.rolename : User.rolename;
      User.createdby = req.body.createdby ? req.body.createdby : User.createdby;
      User.modifiedby = req.body.modifiedby
        ? req.body.modifiedby
        : User.modifiedby;
      User.modifiedat = req.body.modifiedat
        ? req.body.modifiedat
        : User.modifiedat;
      User.userid = req.body.userid ? req.body.userid : User.userid;
      User.clinicid = req.body.clinicid ? req.body.clinicid : User.clinicid;
      User.status = req.body.status ? req.body.status : User.status;
      User.city = req.body.city ? req.body.city : User.city;
      User.state = req.body.state ? req.body.state : User.state;
      User.pincode = req.body.pincode ? req.body.pincode : User.pincode;
      User.clinicname = req.body.clinicname
        ? req.body.clinicname
        : User.clinicname;

      User.about = req.body.about ? req.body.about : User.about;
      User.landline = req.body.landline ? req.body.landline : User.landline;
      User.language = req.body.language ? req.body.language : User.language;
      User.superspeciality = req.body.superspeciality
        ? req.body.superspeciality
        : User.superspeciality;
      User.website = req.body.website ? req.body.website : User.website;
      User.clinicLince = req.body.clinicLince
        ? req.body.clinicLince
        : User.clinicLince;
      User.accountant = req.body.accountant
        ? req.body.accountant
        : User.accountant;
      User.pharmacy = req.body.pharmacy ? req.body.pharmacy : User.pharmacy;
      User.subscription = req.body.subscription
        ? req.body.subscription
        : User.subscription;
      User.subscribedData = req.body.subscribedData
        ? req.body.subscribedData
        : User.subscribedData;
      User.clinicLince = req.body.clinicLince
        ? req.body.clinicLince
        : User.clinicLince;
      User.access = req.body.access ? req.body.access : User.access;

      User.save(function (err, User) {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: "Error when updating User.",
            error: err,
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

    clinicDoctors.findByIdAndRemove(id, function (err, User) {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the User.",
          error: err,
        });
      }

      return res.status(204).json();
    });
  },
};
