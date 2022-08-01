var express = require('express');
var router = express.Router();
var RolemanagementController = require('../controllers/RolemanagementController');

/*
 * GET
 */
router.get('/', RolemanagementController.list);


/*
 * GET
 */
router.get('/:id', RolemanagementController.show);

// router.get('/modifer/:id', RolemanagementController.modifer);

//get


//put method
router.post('/change/:id', RolemanagementController.update)

/*
 * POST
 */
router.post('/crete', RolemanagementController.create);


router.delete("/:id", RolemanagementController.remove);

module.exports = router;
