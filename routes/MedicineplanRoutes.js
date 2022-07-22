var express = require("express");
var router = express.Router();
var MedicineTemplateplanController = require("../controllers/MedicineTemplateplan");

/*
 * GET
 */
router.get("/", MedicineTemplateplanController.list);

/*
 * GET
 */
router.get("/:id", MedicineTemplateplanController.show);

/*
 * POST
 */
router.post("/", MedicineTemplateplanController.create);

/*
 * PUT
 */
router.post("/:id", MedicineTemplateplanController.update);

/*
 * DELETE
 */
router.delete("/:id", MedicineTemplateplanController.remove);

module.exports = router;
