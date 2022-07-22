var express = require('express');
var router = express.Router();
var FeedbackController = require('../controllers/feedbackController');


const { joiValidate } = require('../utility/validationHelper');
const feedbackValidation = require('../controllers/Validators/FeedbackValidation')
const JOI_OPTIONS = { wantResponse: true }
/*
 * GET
 */
router.get('/', FeedbackController.list);

/*
 * GET
 */
router.get('/:id', FeedbackController.show);

/*
 * POST
 */
router.post('/', FeedbackController.create);

/*
 * PUT
 */
router.post('/update/:id', FeedbackController.update);

/*
 * DELETE
 */
router.delete('/:id', FeedbackController.remove);

module.exports = router;
