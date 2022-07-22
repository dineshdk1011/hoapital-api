var express = require('express');
var router = express.Router();
var SummaryController = require('../controllers/SummaryControlelr');


/*
 * GET
 */
router.get('/', SummaryController.list);

/*
 * GET
 */
router.get('/:id', SummaryController.show);

/*
 * POST
 */
router.post('/', SummaryController.create);

/*
 * PUT
 */
router.post('/update/:id', SummaryController.update);

/*
 * DELETE
 */
router.delete('/:id', SummaryController.remove);

module.exports = router;
