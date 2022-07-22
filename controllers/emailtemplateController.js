var emailModel = require("../models/emailTemplate");

module.exports = {
  // View Controller
  list: function (req, res) {
    emailModel.find(function (err, Patient) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Patient.",
          err: err,
        });
      }
      return res.json(Patient);
    });
  },

  // View One Controller

  show: function (req, res) {
    var id = req.params.id;

    emailModel.find({ patientid: id }, function (err, Patient) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Patient",
        });
      }
      if (!Patient) {
        return res.status(404).json({
          message: "No Such Patient",
        });
      }

      return res.json(Patient);
    });
  },

  // Create Controller

  create: function (req, res) {
    var Patient = new emailModel(req.body);

    Patient.save(function (err, Patient) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Patient",
        });
      }

      return res.status(201).json(Patient);
    });
  },

  // Update Controller

  update: function (req, res) {
    // var id = req.params.id;
    var id = req.params.id;

    emailModel.findOne({ _id: id }, function (err, Patient) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Patient",
        });
      }
      if (!Patient) {
        return res.status(404).json({
          message: "No such Patient",
          err: err,
        });
      }

      Patient.name = req.body.name ? req.body.name : Patient.name;
      Patient.content = req.body.content ? req.body.content : Patient.content;
      Patient.date = req.body.date ? req.body.date : Patient.date;
      Patient.save(function (err, Patient) {
        if (err) {
          return res.status(500).json({
            message: "Error when getting Patient",
          });
        }
        return res.status(201).json(Patient);
      });
    });
  },

  // Update Controller

  remove: function (req, res) {
    var id = req.params.id;

    emailModel.findByIdAndDelete(id, function (err, Patient) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Patient",
        });
      }
      return res.status(204).json(true);
    });
  },
};
