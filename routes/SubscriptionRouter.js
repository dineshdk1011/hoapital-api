var express = require("express");
var router = express.Router();
var SubscriptionController = require("../controllers/SubscriptionController");

// get
router.get("/", SubscriptionController.list);

// getbyid
router.get("/:id", SubscriptionController.show);

// create
router.post("/", SubscriptionController.create);

// update
router.post("/update/:id", SubscriptionController.update);

// delete
router.delete("/:id", SubscriptionController.remove);

module.exports = router;
