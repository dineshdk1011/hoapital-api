var express = require('express');
var router = express.Router();
var MedicalHistorySchemaController = require('../controllers/MedicalHistorySchemaController.js');

/*
 * GET
 */
router.get('/', MedicalHistorySchemaController.list);

/*
 * GET
 */
router.get('/:id', MedicalHistorySchemaController.show);

/*
 * POST
 */
router.post('/', MedicalHistorySchemaController.create);

/*
 * PUT
 */
router.put('/:id', MedicalHistorySchemaController.update);

/*
 * DELETE
 */
router.delete('/:id', MedicalHistorySchemaController.remove);

module.exports = router;
