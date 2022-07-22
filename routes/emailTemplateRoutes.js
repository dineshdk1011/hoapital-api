var express = require("express");
var router = express.Router();
var emailController = require("../controllers/emailtemplateController");

// get
router.get("/", emailController.list);

// getbyid
router.get("/:id", emailController.show);

// create
router.post("/", emailController.create);

// update
router.post("/:id", emailController.update);

// delete
router.delete("/:id", emailController.remove);

module.exports = router;
