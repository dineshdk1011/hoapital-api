var express = require('express');
var router = express.Router();
var ReferralSchemaController = require('../controllers/ReferralSchemaController.js');

/*
 * GET
 */
router.get('/', ReferralSchemaController.list);

/*
 * GET
 */
router.get('/:id', ReferralSchemaController.show);

/*
 * POST
 */
router.post('/', ReferralSchemaController.create);

/*
 * PUT
 */
router.put('/:id', ReferralSchemaController.update);

/*
 * DELETE
 */
router.delete('/:id', ReferralSchemaController.remove);

module.exports = router;
