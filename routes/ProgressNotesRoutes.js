var express = require('express');
var router = express.Router();
var ProgressNotesController = require('../controllers/ProgressNotesController');


const { joiValidate } = require('../utility/validationHelper');
const processnotesValidation = require('../controllers/Validators/ProcessnotesValidaion')
const JOI_OPTIONS = { wantResponse: true }
/*
 * GET
 */
router.get('/', ProgressNotesController.list);

/*
 * GET
 */
router.get('/:id', ProgressNotesController.show);

/*
 * POST
 */
router.post('/', ProgressNotesController.create);

/*
 * PUT
 */
router.put('/:id', ProgressNotesController.update);

/*
 * DELETE
 */
router.delete('/:id', ProgressNotesController.remove);

module.exports = router;
