var express = require('express');
var router = express.Router();
var galleryController = require('../controllers/PatientimageController');

/*
 * GET
 */
router.get('/', galleryController.list);

/*
 * GET
 */
router.get('/:id', galleryController.show);

/*
 * POST
 */
router.post('/', galleryController.create);


router.delete('/:id', galleryController.remove);

module.exports = router;
