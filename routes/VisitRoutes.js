var express = require('express');
var router = express.Router();
var VisitController = require('../controllers/VisitController');

/*
 * GET
 */
router.get('/', VisitController.list);


/*
 * GET
 */
router.get('/:patientid', VisitController.show);

// router.get('/modifer/:id', VisitController.modifer);

//get


//put method
router.post('/change/:id', VisitController.update)

/*
 * POST
 */
router.post('/crete', VisitController.create);


router.delete('/:id', VisitController.remove);

module.exports = router;
