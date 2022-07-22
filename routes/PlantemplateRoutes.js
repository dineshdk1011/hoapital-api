var express = require("express");
var router = express.Router();
var PlantemplateController = require("../controllers/PlantemplateController");

/*
 * GET
 */
router.get("/", PlantemplateController.list);

/*
 * GET
 */
router.get("/:id", PlantemplateController.show);

/*
 * POST
 */
router.post("/", PlantemplateController.create);

/*
 * PUT
 */
router.post("/:id", PlantemplateController.update);

/*
 * DELETE
 */
router.delete("/:id", PlantemplateController.remove);

module.exports = router;
