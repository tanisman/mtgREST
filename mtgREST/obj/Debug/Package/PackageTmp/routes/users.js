'use strict';
var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');

/* GET users listing. */
router.get('/', usersController.list_all_users);
router.post('/', usersController.create_a_user);
router.get('/:userId', usersController.read_a_user);

module.exports = router;
