var ClinicModel = require("../models/ClinicModel");

/**
 * PatientController.js
 *
 * @description :: Server-side logic for managing Patients.
 */
module.exports = {
  /**
   * PatientController.list()
   */
  list: function (req, res) {
    ClinicModel.find(function (err, Patients) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Patient.",
          error: err,
        });
      }

      return res.json(Patients);
    });
  },

  /**
   * PatientController.show()
   */
  show: function (req, res) {
    var id = req.params.id;

    ClinicModel.find({ _id: id }, function (err, Patient) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Patient.",
          error: err,
        });
      }

      if (!Patient) {
        return res.status(404).json({
          message: "No such Patient",
        });
      }

      return res.json(Patient);
    });
  },
  //clinic show with the id
  modifer: function (req, res) {
    var id = req.params.id;

    ClinicModel.findOne({ _id: id }, function (err, Patient) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Patient.",
          error: err,
        });
      }

      if (!Patient) {
        return res.status(404).json({
          message: "No such Patient",
        });
      }

      return res.json(Patient);
    });
  },

  /**
   * PatientController.create()
   */
  create: function (req, res) {
    var Patient = new ClinicModel(req.body);
    Patient.save(function (err, Patient) {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: "Error when creating Patient",
          error: err,
        });
      }

      return res.status(201).json(Patient);
    });
  },

  /**
   * PatientController.update()
   */
  update: function (req, res) {
    var id = req.params.id;
    var data = req.body;
    console.log(data);
    ClinicModel.findOne({ _id: id }, function (err, Clinic) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Patient",
          error: err,
        });
      }

      if (!Clinic) {
        return res.status(404).json({
          message: "No such Patient",
        });
      }

      Clinic.clinicname = req.body.clinicname
        ? req.body.clinicname
        : Clinic.clinicname;
      Clinic.nabh = req.body.nabh ? req.body.nabh : Clinic.nabh;
      Clinic.email = req.body.email ? req.body.email : Clinic.email;
      Clinic.phone = req.body.phone ? req.body.phone : Clinic.phone;
      Clinic.charges = req.body.charges ? req.body.charges : Clinic.charges;
      Clinic.gstpin = req.body.gstpin ? req.body.gstpin : Clinic.gstpin;
      Clinic.speciality = req.body.speciality
        ? req.body.speciality
        : Clinic.speciality;
      Clinic.followupcharges = req.body.followupcharges
        ? req.body.followupcharges
        : Clinic.followupcharges;
      Clinic.about = req.body.about ? req.body.about : Clinic.about;
      Clinic.pincode = req.body.pincode ? req.body.pincode : Clinic.pincode;
      Clinic.city = req.body.city ? req.body.city : Clinic.city;
      Clinic.area = req.body.area ? req.body.area : Clinic.area;
      Clinic.address = req.body.address ? req.body.address : Clinic.address;
      Clinic.fromtiming = req.body.fromtiming
        ? req.body.fromtiming
        : Clinic.fromtiming;
      Clinic.totiming = req.body.totiming ? req.body.totiming : Clinic.totiming;
      Clinic.googlelink = req.body.googlelink
        ? req.body.googlelink
        : Clinic.googlelink;
      Clinic.justdiallink = req.body.justdiallink
        ? req.body.justdiallink
        : Clinic.justdiallink;
      Clinic.doctorid = req.body.doctorid ? req.body.doctorid : Clinic.doctorid;
      Clinic.status = req.body.status ? req.body.status : Clinic.status;

      Clinic.save(function (err, Clinic) {
        if (err) {
          return res.status(500).json({
            message: "Error when updating Clinic.",
            error: err,
          });
        }

        return res.json(Clinic);
      });
    });
  },

  /**
   * PatientController.remove()
   */
  remove: function (req, res) {
    var id = req.params.id;

    ClinicModel.findByIdAndRemove(id, function (err, Patient) {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the Patient.",
          error: err,
        });
      }

      return res.status(204).json(true);
    });
  },
};
