var express = require('express');
var router = express.Router();
var notificationchannelschemaController = require('../controllers/notificationchannelschemaController.js');

/*
 * GET
 */
router.get('/', notificationchannelschemaController.list);

/*
 * GET
 */
router.get('/:id', notificationchannelschemaController.show);

/*
 * POST
 */
router.post('/', notificationchannelschemaController.create);

/*
 * PUT
 */
router.put('/:id', notificationchannelschemaController.update);

/*
 * DELETE
 */
router.delete('/:id', notificationchannelschemaController.remove);

module.exports = router;
