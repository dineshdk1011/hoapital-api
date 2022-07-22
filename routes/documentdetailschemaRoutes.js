var express = require('express');
var router = express.Router();
var documentdetailschemaController = require('../controllers/documentdetailschemaController.js');

/*
 * GET
 */
router.get('/', documentdetailschemaController.list);

/*
 * GET
 */
router.get('/:id', documentdetailschemaController.show);

/*
 * POST
 */
router.post('/', documentdetailschemaController.create);

/*
 * PUT
 */
router.put('/:id', documentdetailschemaController.update);

/*
 * DELETE
 */
router.delete('/:id', documentdetailschemaController.remove);

module.exports = router;
