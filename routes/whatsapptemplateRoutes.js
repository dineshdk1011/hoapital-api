var express = require("express");
var router = express.Router();
var whatsappController = require("../controllers/whatsapptemplateController");

// get
router.get("/", whatsappController.list);

// getbyid
router.get("/:id", whatsappController.show);

// create
router.post("/", whatsappController.create);

// update
router.post("/:id", whatsappController.update);

// delete
router.delete("/:id", whatsappController.remove);

module.exports = router;
