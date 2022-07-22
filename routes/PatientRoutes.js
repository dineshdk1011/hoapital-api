var express = require('express');
var router = express.Router();
var PatientController = require('../controllers/PatientController.js');


const { joiValidate } = require('../utility/validationHelper');
const patientValidation = require('../controllers/Validators/PatientValidation')
const JOI_OPTIONS = { wantResponse: true }
/*
 * GET
 */
router.get('/', PatientController.list);

/*
 * GET
 */
router.get('/:id', PatientController.show);
router.get('/get/:id', PatientController.getdata);


/*
 * POST
 */
router.post('/', PatientController.create);
router.post('/login', PatientController.login);

/*
 * PUT
 */
router.post('/update/:id', PatientController.update);

/*
 * DELETE
 */
router.delete('/:id', PatientController.remove);

module.exports = router;
