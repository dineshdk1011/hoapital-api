var express = require('express');
var router = express.Router();
const AdminLoginController = require('../controllers/AdminLoginController');

const { joiValidate } = require('../utility/validationHelper');
const userValidation = require('../controllers/Validators/UserValidation');
const JOI_OPTIONS = { wantResponse: true }

/*
 * GET
 */
router.get('/', AdminLoginController.list);

/*
 * GET
 */
router.get('/:id', AdminLoginController.show);

router.post('/login', joiValidate(userValidation.login, JOI_OPTIONS), AdminLoginController.login);
router.post('/jwtauthendicate', AdminLoginController.jwtauthendicate);

/*
 * POST
 */
// router.post('/', joiValidate(userValidation.register, JOI_OPTIONS), AdminLoginController.create);
router.post('/', AdminLoginController.create);

/*
 * PUT
 */
router.post('/:id', AdminLoginController.update);

/*
 * DELETE
 */
router.delete('/:id', AdminLoginController.remove);

module.exports = router;
