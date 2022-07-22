var express = require('express');
var router = express.Router();
var FeedbacktemplateController = require('../controllers/feedbacktemplateController');



/*
 * GET
 */
router.get('/', FeedbacktemplateController.list);

/*
 * GET
 */
router.get('/:id', FeedbacktemplateController.show);

/*
 * POST
 */
router.post('/create', FeedbacktemplateController.create);

/*
 * PUT
 */
router.post('/update/:id', FeedbacktemplateController.update);

/*
 * DELETE
 */
router.delete('/:id', FeedbacktemplateController.remove);

module.exports = router;
