var express = require('express');
var router = express.Router();
var bloodgroupschemaController = require('../controllers/bloodgroupschemaController.js');

/*
 * GET
 */
router.get('/', bloodgroupschemaController.list);

/*
 * GET
 */
router.get('/:id', bloodgroupschemaController.show);

/*
 * POST
 */
router.post('/', bloodgroupschemaController.create);

/*
 * PUT
 */
router.put('/:id', bloodgroupschemaController.update);

/*
 * DELETE
 */
router.delete('/:id', bloodgroupschemaController.remove);

module.exports = router;
