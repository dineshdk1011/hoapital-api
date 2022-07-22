var express = require("express");
var router = express.Router();
var FeedBacksController = require("../controllers/FeedBacksController");

/*
 * GET
 */
router.get("/", FeedBacksController.list);

/*
 * GET
 */
router.get("/:id", FeedBacksController.show);

/*
 * POST
 */
router.post("/", FeedBacksController.create);

/*
 * PUT
 */
router.post("/:id", FeedBacksController.update);

/*
 * DELETE
 */
router.delete("/:id", FeedBacksController.remove);

module.exports = router;
