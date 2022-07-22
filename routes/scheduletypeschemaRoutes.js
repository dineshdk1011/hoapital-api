var express = require('express');
var router = express.Router();
var scheduletypeschemaController = require('../controllers/scheduletypeschemaController.js');

/*
 * GET
 */
router.get('/', scheduletypeschemaController.list);

/*
 * GET
 */
router.get('/:id', scheduletypeschemaController.show);

/*
 * POST
 */
router.post('/', scheduletypeschemaController.create);

/*
 * PUT
 */
router.put('/:id', scheduletypeschemaController.update);

/*
 * DELETE
 */
router.delete('/:id', scheduletypeschemaController.remove);

module.exports = router;
