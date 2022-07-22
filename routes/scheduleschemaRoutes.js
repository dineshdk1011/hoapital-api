var express = require('express');
var router = express.Router();
var scheduleschemaController = require('../controllers/scheduleschemaController.js');

/*
 * GET
 */
router.get('/', scheduleschemaController.list);

/*
 * GET
 */
router.get('/:id', scheduleschemaController.show);

/*
 * POST
 */
router.post('/', scheduleschemaController.create);

/*
 * PUT
 */
router.put('/:id', scheduleschemaController.update);

/*
 * DELETE
 */
router.delete('/:id', scheduleschemaController.remove);

module.exports = router;
