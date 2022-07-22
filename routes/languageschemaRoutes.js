var express = require('express');
var router = express.Router();
var languageschemaController = require('../controllers/languageschemaController.js');

/*
 * GET
 */
router.get('/', languageschemaController.list);

/*
 * GET
 */
router.get('/:id', languageschemaController.show);

/*
 * POST
 */
router.post('/', languageschemaController.create);

/*
 * PUT
 */
router.put('/:id', languageschemaController.update);

/*
 * DELETE
 */
router.delete('/:id', languageschemaController.remove);

module.exports = router;
