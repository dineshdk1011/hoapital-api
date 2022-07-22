var express = require('express');
var router = express.Router();
var detailtypeschemaController = require('../controllers/detailtypeschemaController.js');

/*
 * GET
 */
router.get('/', detailtypeschemaController.list);

/*
 * GET
 */
router.get('/:id', detailtypeschemaController.show);

/*
 * POST
 */
router.post('/', detailtypeschemaController.create);

/*
 * PUT
 */
router.put('/:id', detailtypeschemaController.update);

/*
 * DELETE
 */
router.delete('/:id', detailtypeschemaController.remove);

module.exports = router;
