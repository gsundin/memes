var express = require("express");
var app = express();

// Heroku environment variables
var fb_app_id = process.env.APP_ID;
var fb_app_secret = process.env.APP_SECRET;

var FB = require('fb');
var fb = new FB.Facebook();

// Instance of our Facebook app, called "meme-stream"
var memeApp = FB.extend({appId: fb_app_id, appSecret: fb_app_secret});

/* serves main page */
app.get("/", function(req, res) {
	res.sendfile('redirect.htm')
});

app.post("/user/add", function(req, res) {
	/* some server side logic */
	res.send("OK");
});

/* serves all the static files */
app.get(/^(.+)$/, function(req, res){
	console.log('static file request : ' + req.params);
	res.sendfile( __dirname + req.params[0]);
});

var port = process.env.PORT || 8080;

app.listen(port, function() {
	console.log("Listening on " + port);
});
