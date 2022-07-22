var FeedbackModel = require("../models/feedback.Models");

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
    FeedbackModel.find(function (err, Patients) {
      console.log(err);
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

    FeedbackModel.find({ patientid: id }, function (err, Patient) {
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
    var Patient = new FeedbackModel(req.body);
    console.log(Patient);
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
    console.log(id,"helo");

    FeedbackModel.findOne({ _id: id }, function (err, Patient) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Patient",
          error: err,
        });
      }

      if (!Patient) {
        return res.status(404).json({
          message: "No such Patient",
        });
      }

      Patient.status = req.body.status? req.body.status: Patient.status;
      Patient.pharmacystatus = req.body.pharmacystatus? req.body.pharmacystatus: Patient.pharmacystatus;
      

      Patient.save(function (err, Patient) {
        console.log(err);
        if (err) {
          return res.status(500).json({
            message: "Error when updating Patient.",
            error: err,
          });
        }

        return res.json(Patient);
      });
    });
  },

  /**
   * PatientController.remove()
   */
  remove: function (req, res) {
    var id = req.params.id;

    FeedbackModel.findByIdAndRemove(id, function (err, Patient) {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the Patient.",
          error: err,
        });
      }

      return res.status(204).json();
    });
  },
};
