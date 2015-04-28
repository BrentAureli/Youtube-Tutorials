var fs = require('fs');
// var S3FS = require('s3fs'),
//     s3fsImpl = new S3FS('brenttestbucket123', {
// 		accessKeyId: 'AKIAIVEDHW57HJ357B2Q',
// 		secretAccessKey: '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'
//     });
// var multiparty = require('connect-multiparty'),
//     multipartyMiddleware = multiparty();

// Create our bucket if it doesn't exist
// s3fsImpl.create();

module.exports = function(router, passport){
	// router.use(multipartyMiddleware);

	router.use(passport.authenticate('bearer', { session: false }));
	router.use(function(req, res, next){
		fs.appendFile('logs.txt', req.path + " token: " + req.query.access_token + "\n",
			function(err){
				next();
			});
	});

	// router.post('/testupload', function (req, res) {
	//     var file = req.files.file;
	//     var stream = fs.createReadStream(file.path);
	//     return s3fsImpl.writeFile(file.originalFilename, stream).then(function () {
	//         fs.unlink(file.path, function (err) {
	//             if (err) {
	//                 console.error(err);
	//             }
	//         });
	//         res.redirect('/profile');
	//     });
	// });


	router.get('/testAPI', function(req, res){
		res.json({ SecretData: 'abc123' });
	});

}