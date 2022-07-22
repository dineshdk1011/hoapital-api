var express = require('express');
var router = express.Router();
var specializationschemaController = require('../controllers/specializationschemaController.js');

/*
 * GET
 */
router.get('/', specializationschemaController.list);

/*
 * GET
 */
router.get('/:id', specializationschemaController.show);

/*
 * POST
 */
router.post('/', specializationschemaController.create);

/*
 * PUT
 */
router.put('/:id', specializationschemaController.update);

/*
 * DELETE
 */
router.delete('/:id', specializationschemaController.remove);

module.exports = router;
