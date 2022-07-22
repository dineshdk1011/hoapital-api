var express = require("express");
var router = express.Router();
var pharmacyEmailController = require("../controllers/PharmacyEmailController");

// get
router.get("/", pharmacyEmailController.list);

// getbyid
router.get("/:id", pharmacyEmailController.show);

// create
router.post("/", pharmacyEmailController.create);

// update
router.post("/:id", pharmacyEmailController.update);

// delete
router.delete("/:id", pharmacyEmailController.remove);

module.exports = router;
