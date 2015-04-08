module.exports = function(router, passport){

	router.use(function(req, res, next){
		if(req.isAuthenticated()){
			return next();
		}
		res.redirect('/auth');
	});

	router.get('/profile', function(req, res){
		res.render('profile.ejs', { user: req.user });
	});

	router.get('/*', function(req, res){
		res.redirect('/profile');
	})

	

}