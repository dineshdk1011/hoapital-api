var express = require('express');
var router = express.Router();
var PatientGroupController = require('../controllers/PatientGroupController.js');

/*
 * GET
 */
router.get('/', PatientGroupController.list);

/*
 * GET
 */
router.get('/:id', PatientGroupController.show);

/*
 * POST
 */
router.post('/', PatientGroupController.create);

/*
 * PUT
 */
router.put('/:id', PatientGroupController.update);

/*
 * DELETE
 */
router.delete('/:id', PatientGroupController.remove);

module.exports = router;
