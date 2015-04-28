
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var flash = require('connect-flash');
var MongoStore = require('connect-mongo')(session);


var configDB = require('./config/database.js');
mongoose.connect(configDB.url);
require('./config/passport')(passport);

app.use(express.static(__dirname + '/public'));

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({secret: 'anystringoftext',
				 saveUninitialized: true,
				 resave: true,
				 store: new MongoStore({ mongooseConnection: mongoose.connection,
				 							ttl: 2 * 24 * 60 * 60 })}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

app.set('view engine', 'ejs');

app.get('/testtwilio', function(req, res){
	client.sendMessage({
		to: '+18175264051',
		from: '+18176591086',
		body: 'Hello World from twilio'
	}, function(err, data){
		if(err)
			console.log(err);
		console.log(data);
	});
});

var api = express.Router();
require('./app/routes/api.js')(api, passport);
app.use('/api', api);

var auth = express.Router();
require('./app/routes/auth.js')(auth, passport);
app.use('/auth', auth);

var secure = express.Router();
require('./app/routes/secure.js')(secure, passport);
app.use('/', secure);


app.listen(port);
console.log('Server running on port: ' + port);




