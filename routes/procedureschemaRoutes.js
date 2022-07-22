var express = require('express');
var router = express.Router();
var procedureschemaController = require('../controllers/procedureschemaController.js');

/*
 * GET
 */
router.get('/', procedureschemaController.list);

/*
 * GET
 */
router.get('/:id', procedureschemaController.show);

/*
 * POST
 */
router.post('/', procedureschemaController.create);

/*
 * PUT
 */
router.put('/:id', procedureschemaController.update);

/*
 * DELETE
 */
router.delete('/:id', procedureschemaController.remove);

module.exports = router;
