'use strict';
var usersController = require('../controllers/usersController');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', usersController.list_all_users);
router.post('/', usersController.create_a_user);
router.get('/:userId', usersController.read_a_user);

module.exports = router;
