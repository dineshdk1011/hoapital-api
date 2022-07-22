var express = require("express");
var router = express.Router();
var smsController = require("../controllers/smsTemplateController");

// get
router.get("/", smsController.list);

// getbyid
router.get("/:id", smsController.show);

// create
router.post("/", smsController.create);

// update
router.post("/:id", smsController.update);

// delete
router.delete("/:id", smsController.remove);

module.exports = router;
