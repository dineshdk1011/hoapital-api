var express = require("express");
var router = express.Router();
var whatsappcontroller = require("../controllers/PharmacyWhatsappController");

// get
router.get("/", whatsappcontroller.list);

// getbyid
router.get("/:id", whatsappcontroller.show);

// create
router.post("/", whatsappcontroller.create);

// update
router.post("/:id", whatsappcontroller.update);

// delete
router.delete("/:id", whatsappcontroller.remove);

module.exports = router;
