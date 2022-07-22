var express = require('express');
var router = express.Router();
const AccountsController = require('../controllers/AccountsController');

const { joiValidate } = require('../utility/validationHelper');
const userValidation = require('../controllers/Validators/UserValidation');
const JOI_OPTIONS = { wantResponse: true }

/*
 * GET
 */
router.get('/', AccountsController.list);

/*
 * GET
 */
router.get('/:id', AccountsController.show);

router.post('/login', joiValidate(userValidation.login, JOI_OPTIONS), AccountsController.login);
router.post('/jwtauthendicate', AccountsController.jwtauthendicate);

/*
 * POST
 */
// router.post('/', joiValidate(userValidation.register, JOI_OPTIONS), AccountsController.create);
router.post('/', AccountsController.create);

/*
 * PUT
 */
router.post('/:id', AccountsController.update);

/*
 * DELETE
 */
router.delete('/:id', AccountsController.remove);

module.exports = router;
