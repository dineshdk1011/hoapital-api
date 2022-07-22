var express = require('express');
var router = express.Router();
var DueController = require('../controllers/DueController');

/*
 * GET
 */
router.get('/', DueController.list);


/*
 * GET
 */
router.get('/:id', DueController.show);

// router.get('/modifer/:id', DueController.modifer);

//get


//put method
router.post('/change/:id', DueController.update)

/*
 * POST
 */
router.post('/crete', DueController.create);


router.delete('/:id', DueController.remove);

module.exports = router;
