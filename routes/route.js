var models  = require('../models');
var express = require('express');
var userController = require('../controller/user_controller').userController;
var router = express.Router();

/* GET home page. */
router.get('/', userController.home);
router.get('/register', userController.getRegisterPage);
router.get('/login', userController.getLoginPage);


module.exports = router;
