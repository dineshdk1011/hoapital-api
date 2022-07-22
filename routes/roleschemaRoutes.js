var express = require('express');
var router = express.Router();
var roleschemaController = require('../controllers/roleschemaController.js');

/*
 * GET
 */
router.get('/', roleschemaController.list);

/*
 * GET
 */
router.get('/:id', roleschemaController.show);

/*
 * POST
 */
router.post('/', roleschemaController.create);

/*
 * PUT
 */
router.put('/:id', roleschemaController.update);

/*
 * DELETE
 */
router.delete('/:id', roleschemaController.remove);

module.exports = router;
