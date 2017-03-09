var express = require("express");
var app = express();

// For file stuff
var fs = require('fs');

var config = require('./fb.js');

var FB = require('fb');
var fb = new FB.Facebook();

// Instance of our Facebook app, called "meme-stream"
var memeApp = FB.extend({appId: config.CLIENT_ID, appSecret: config.CLIENT_SECRET});

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

// Get list of all memes in folder
var memes = fs.readdirSync('/public/memes/');
var numberOfMemes = memes.size();

// Infinitely loop the meme rotator
var intervalHandle = setInterval(getDurationNext, duration);

// Display next meme on site every X ms
function memeRotator () {
	var i = 0;

}
