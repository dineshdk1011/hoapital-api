var express = require('express');
var router = express.Router();
const PharmacyController = require('../controllers/PharmacyController');

const { joiValidate } = require('../utility/validationHelper');
const userValidation = require('../controllers/Validators/UserValidation');
const JOI_OPTIONS = { wantResponse: true }

/*
 * GET
 */
router.get('/', PharmacyController.list);

/*
 * GET
 */
router.get('/:id', PharmacyController.show);

router.post('/login', joiValidate(userValidation.login, JOI_OPTIONS), PharmacyController.login);
router.post('/jwtauthendicate', PharmacyController.jwtauthendicate);

/*
 * POST
 */
// router.post('/', joiValidate(userValidation.register, JOI_OPTIONS), PharmacyController.create);
router.post('/', PharmacyController.create);

/*
 * PUT
 */
router.post('/update/:id', PharmacyController.update);

/*
 * DELETE
 */
router.delete('/:id', PharmacyController.remove);

module.exports = router;
