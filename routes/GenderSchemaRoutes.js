var express = require('express');
var router = express.Router();
var GenderSchemaController = require('../controllers/GenderSchemaController.js');

/*
 * GET
 */
router.get('/', GenderSchemaController.list);

/*
 * GET
 */
router.get('/:id', GenderSchemaController.show);

/*
 * POST
 */
router.post('/', GenderSchemaController.create);

/*
 * PUT
 */
router.put('/:id', GenderSchemaController.update);

/*
 * DELETE
 */
router.delete('/:id', GenderSchemaController.remove);

module.exports = router;
