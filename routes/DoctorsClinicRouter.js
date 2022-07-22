var express = require("express");
var router = express.Router();
var DoctorClinicController = require("../controllers/DoctorsClinicController");

// get
router.get("/", DoctorClinicController.list);

// getbyid
router.get("/:id", DoctorClinicController.show);

// create
router.post("/", DoctorClinicController.create);

// update
router.post("/:id", DoctorClinicController.update);

// delete
router.delete("/:id", DoctorClinicController.remove);

module.exports = router;
