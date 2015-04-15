var User = require('../models/user').User;
var Token = require('../models/user').Token;

module.exports = function(router, passport){

	router.use(function(req, res, next){
		if(req.isAuthenticated()){
			return next();
		}
		res.redirect('/auth');
	});

	router.get('/profile', function(req, res){
		User.findOne({ _id: req.user._id }).populate('token').exec(function(err, user){
			res.render('secured/profile.ejs', { user: user });
		});
	});

	router.get('/home', function(req, res){
		res.render('secured/home.ejs');
	});

	router.get('/getToken', function(req, res){
		User.findOne({ _id: req.user._id }).populate('token').exec(function(err, user){
			if(user.token == null)
				user.generateToken();
			req.user = user;
			res.redirect('/profile');
		});
	});

	router.get('/*', function(req, res){
		res.redirect('/profile');
	});

}