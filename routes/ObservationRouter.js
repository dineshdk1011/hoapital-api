var express = require('express');
var router = express.Router();
var ObservationController = require('../controllers/ObservationController');

/*
 * GET
 */
router.get('/', ObservationController.list);


/*
 * GET
 */
router.get('/:id', ObservationController.show);

// router.get('/modifer/:id', ObservationController.modifer);

//get


//put method
router.post('/change/:id', ObservationController.update)

/*
 * POST
 */
router.post('/crete', ObservationController.create);


router.delete('/:id', ObservationController.remove);

module.exports = router;
