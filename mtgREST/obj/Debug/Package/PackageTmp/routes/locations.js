'use strict';
var locationsController = require('../controllers/locationsController');
var userController = require('../controllers/usersController');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', locationsController.list_all_locations);
router.post('/', userController.login_required, locationsController.create_a_location);
router.get('/:locationId', locationsController.read_a_location);
router.get('/:lat/:lng', userController.login_required, locationsController.find_nearby);

module.exports = router;
