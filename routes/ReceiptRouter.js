var express = require('express');
var router = express.Router();
var receiptController = require('../controllers/receiptController');

/*
 * GET
 */
router.get('/', receiptController.list);

/*
 * GET
 */
router.get('/:id', receiptController.show);

/*
 * POST
 */
router.post('/', receiptController.create);


router.delete('/:id', receiptController.remove);

module.exports = router;
