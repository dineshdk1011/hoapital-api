var express = require('express');
var router = express.Router();
var reviewController = require('../controllers/ReviewController');

/*
 * GET
 */
router.get('/', reviewController.list);

/*
 * GET
 */
router.get('/:id', reviewController.show);

/*
 * POST
 */

router.post('/:id', reviewController.update);

router.post('/', reviewController.create);


router.delete('/:id', reviewController.remove);

module.exports = router;
