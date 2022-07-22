var express = require("express");
var router = express.Router();
var MessageController = require("../controllers/MessageController");

/*
 * GET
 */
router.get("/", MessageController.list);

/*
 * GET
 */
router.get("/:id", MessageController.show);

/*
 * POST
 */
router.post("/", MessageController.create);

/*
 * PUT
 */
router.post("/:id", MessageController.update);

/*
 * DELETE
 */
router.delete("/:id", MessageController.remove);

module.exports = router;
