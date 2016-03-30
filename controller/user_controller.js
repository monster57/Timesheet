
var userController = {};
userController.home = function(req, res, next){
	res.render('index')
}

userController.registerUser = function(req, res, next){
	res.render('register');
}

exports.userController = userController;