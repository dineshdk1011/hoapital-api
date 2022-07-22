var express = require('express');
var router = express.Router();
var PdrugmasterController = require('../controllers/PdrugmasterController');

/*
 * GET
 */
router.get('/', PdrugmasterController.list);

/*
 * GET
 */
router.get('/singlee/:id', PdrugmasterController.show);

/*
 * POST
 */
router.post('/', PdrugmasterController.create);

router.post('/:id', PdrugmasterController.update);
router.delete('/:id', PdrugmasterController.remove);

module.exports = router;
