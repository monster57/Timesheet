var models  = require('../models');
var express = require('express');
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


router.get('/register', function(req,res,next){
	res.render('register')
})
module.exports = router;
