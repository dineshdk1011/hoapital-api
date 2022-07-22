var express = require("express");
var router = express.Router();
var AppointmentController = require("../controllers/AppointemntController");

const { joiValidate } = require("../utility/validationHelper");
const appointmentValidation = require("../controllers/Validators/AppointmentValidation");
const JOI_OPTIONS = { wantResponse: true };

/*

 * GET
 */
router.get("/", AppointmentController.list);

/*
 * GET
 */
router.get("/:id", AppointmentController.show);

router.get("/doctor/:doctorid", AppointmentController.showbyid);
router.get("/patient/:patientid", AppointmentController.showbypatient);
/*
 * POST
 */
router.post("/", AppointmentController.create);

/*
 * PUT
 */
router.post("/:id", AppointmentController.update);

/*
 * DELETE
 */
router.delete("/:id", AppointmentController.remove);

module.exports = router;
