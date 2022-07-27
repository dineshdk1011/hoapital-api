var express = require("express");
var router = express.Router();
var PriceplanController = require("../controllers/PriceplanController");

const { joiValidate } = require("../utility/validationHelper");
const appointmentValidation = require("../controllers/Validators/AppointmentValidation");
const JOI_OPTIONS = { wantResponse: true };

/*

 * GET
 */
router.get("/", PriceplanController.list);

/*
 * GET
 */
router.get("/:id", PriceplanController.show);

router.get("/doctor/:doctorid", PriceplanController.showbyid);
router.get("/patient/:patientid", PriceplanController.showbypatient);
/*
 * POST
 */
router.post("/", PriceplanController.create);

/*
 * PUT
 */
router.post("/:id", PriceplanController.update);

/*
 * DELETE
 */
router.delete("/:id", PriceplanController.remove);

module.exports = router;
