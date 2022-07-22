var express = require('express');
var router = express.Router();
var idcardtypeschemaController = require('../controllers/idcardtypeschemaController.js');

/*
 * GET
 */
router.get('/', idcardtypeschemaController.list);

/*
 * GET
 */
router.get('/:id', idcardtypeschemaController.show);

/*
 * POST
 */
router.post('/', idcardtypeschemaController.create);

/*
 * PUT
 */
router.put('/:id', idcardtypeschemaController.update);

/*
 * DELETE
 */
router.delete('/:id', idcardtypeschemaController.remove);

module.exports = router;
