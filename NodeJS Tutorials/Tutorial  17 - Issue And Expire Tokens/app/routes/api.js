var fs = require('fs');
module.exports = function(router, passport){

	router.use(passport.authenticate('bearer', { session: false }));
	router.use(function(req, res, next){
		fs.appendFile('logs.txt', req.path + " token: " + req.query.access_token + "\n",
			function(err){
				next();
			});
	});


	router.get('/testAPI', function(req, res){
		res.json({ SecretData: 'abc123' });
	});

}