var express = require("express");
var router = express.Router();
var InstructionController = require("../controllers/InstructionController");

/*
 * GET
 */
router.get("/", InstructionController.list);

/*
 * GET
 */
router.get("/:id", InstructionController.show);

/*
 * POST
 */
router.post("/", InstructionController.create);

/*
 * PUT
 */
router.post("/:id", InstructionController.update);

/*
 * DELETE
 */
router.delete("/:id", InstructionController.remove);

module.exports = router;
