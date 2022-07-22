var express = require('express');
var router = express.Router();
var slotdurationschemaController = require('../controllers/slotdurationschemaController.js');

/*
 * GET
 */
router.get('/', slotdurationschemaController.list);

/*
 * GET
 */
router.get('/:id', slotdurationschemaController.show);

/*
 * POST
 */
router.post('/', slotdurationschemaController.create);

/*
 * PUT
 */
router.put('/:id', slotdurationschemaController.update);

/*
 * DELETE
 */
router.delete('/:id', slotdurationschemaController.remove);

module.exports = router;
