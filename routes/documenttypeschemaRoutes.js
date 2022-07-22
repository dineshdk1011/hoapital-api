var express = require('express');
var router = express.Router();
var documenttypeschemaController = require('../controllers/documenttypeschemaController.js');

/*
 * GET
 */
router.get('/', documenttypeschemaController.list);

/*
 * GET
 */
router.get('/:id', documenttypeschemaController.show);

/*
 * POST
 */
router.post('/', documenttypeschemaController.create);

/*
 * PUT
 */
router.put('/:id', documenttypeschemaController.update);

/*
 * DELETE
 */
router.delete('/:id', documenttypeschemaController.remove);

module.exports = router;
