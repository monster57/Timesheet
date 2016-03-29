
var userController = {};

userController.registerUser = function(req, res, next){
	res.render('register');
}

exports.userController = userController;