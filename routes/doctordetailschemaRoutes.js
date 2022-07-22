var express = require('express');
var router = express.Router();
var doctordetailschemaController = require('../controllers/doctordetailschemaController.js');

/*
 * GET
 */
router.get('/', doctordetailschemaController.list);

/*
 * GET
 */
router.get('/:id', doctordetailschemaController.show);

/*
 * POST
 */
router.post('/', doctordetailschemaController.create);

/*
 * PUT
 */
router.put('/:id', doctordetailschemaController.update);

/*
 * DELETE
 */
router.delete('/:id', doctordetailschemaController.remove);

module.exports = router;
