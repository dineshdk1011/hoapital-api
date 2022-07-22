var express = require("express");
var router = express.Router();
var DossController = require("../controllers/DossController");

/*
 * GET
 */
router.get("/", DossController.list);

/*
 * GET
 */
router.get("/:id", DossController.show);

/*
 * POST
 */
router.post("/", DossController.create);

/*
 * PUT
 */
router.post("/:id", DossController.update);

/*
 * DELETE
 */
router.delete("/:id", DossController.remove);

module.exports = router;
