var express = require("express");
var router = express.Router();
var UserController = require("../controllers/UserController.js");

const { joiValidate } = require("../utility/validationHelper");
const userValidation = require("../controllers/Validators/UserValidation");
const JOI_OPTIONS = { wantResponse: true };

/*
 * GET
 */
router.get("/", UserController.list);

/*
 * GET
 */
router.get("/:id", UserController.show);

router.post(
  "/login",
  joiValidate(userValidation.login, JOI_OPTIONS),
  UserController.login
);
router.post("/jwtauthendicate", UserController.jwtauthendicate);

/*
 * POST
 */
// router.post('/', joiValidate(userValidation.register, JOI_OPTIONS), UserController.create);
router.post("/", UserController.create);

/*
 * PUT
 */
router.post("/update/:id", UserController.update);

/*
 * DELETE
 */
router.delete("/:id", UserController.remove);

module.exports = router;
