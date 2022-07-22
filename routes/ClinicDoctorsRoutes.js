var express = require("express");
var router = express.Router();
var ClinicDoctorsModel = require("../controllers/ClinicDoctorsController");

const { joiValidate } = require("../utility/validationHelper");
const userValidation = require("../controllers/Validators/UserValidation");
const JOI_OPTIONS = { wantResponse: true };

/*
 * GET
 */
router.get("/", ClinicDoctorsModel.list);

/*
 * GET
 */
router.get("/:id", ClinicDoctorsModel.show);

router.post(
  "/login",
  joiValidate(userValidation.login, JOI_OPTIONS),
  ClinicDoctorsModel.login
);
router.post("/jwtauthendicate", ClinicDoctorsModel.jwtauthendicate);

/*
 * POST
 */
// router.post('/', joiValidate(userValidation.register, JOI_OPTIONS), ClinicDoctorsModel.create);
router.post("/", ClinicDoctorsModel.create);

/*
 * PUT
 */
router.post("/update/:id", ClinicDoctorsModel.update);

/*
 * DELETE
 */
router.delete("/:id", ClinicDoctorsModel.remove);

module.exports = router;
