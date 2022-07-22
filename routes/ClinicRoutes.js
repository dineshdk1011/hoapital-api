var express = require('express');
var router = express.Router();
var clinicController = require('../controllers/ClinicController');

/*
 * GET
 */
router.get('/', clinicController.list);


/*
 * GET
 */
router.get('/:id', clinicController.show);

router.get('/modifer/:id', clinicController.modifer);

//get


//put method
router.post('/change/:id',clinicController.update)

/*
 * POST
 */
router.post('/', clinicController.create);


router.delete('/:id', clinicController.remove);

module.exports = router;
