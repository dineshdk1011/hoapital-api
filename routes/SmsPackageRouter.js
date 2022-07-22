var express = require("express");
var router = express.Router();
var SmsPackageController = require("../controllers/SmspackageController");

// get
router.get("/", SmsPackageController.list);

// getbyid
router.get("/:id", SmsPackageController.show);

// create
router.post("/", SmsPackageController.create);

// update
router.post("/update/:id", SmsPackageController.update);

// delete
router.delete("/:id", SmsPackageController.remove);

module.exports = router;
