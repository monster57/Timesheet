var models  = require('../models');
var express = require('express');
var userController = require('../controller/user_controller').userController;
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	models.User.findAll().then(function(users) {
    res.render('index', {
      title: 'Express',
      users: users
    });
  });
  // res.render('index', { title: 'Express' });
});


router.get('/register', userController.registerUser)


module.exports = router;