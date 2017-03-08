var express = require("express");
var app = express();

var FB = require('fb');
var fb = new FB.Facebook();

// Instance of our Facebook app, called "meme-stream"
var memeApp = FB.extend({appId: '1849212205294114', appSecret: '2c90cfcdd707c1bfcd0396068c923511'})

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
