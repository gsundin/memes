# memes
>"These are my maymays. Be gentle with them."

Ongoing project to make bring the (objectively) dankest memes to the public.

## Goal
Use Facebook graph API to pull the most recently-posted OC from hundreds of meme pages on Facebook and display them in a real-time stream on a web interface hosted [on Heroku](https://meme-stream.herokuapp.com).

## Technologies and Services
**Node.js**: 
* *Express*: Node server package
* *fb*: Node Facebook Graph API package
* *Mocha*: Node test package

**HTML5Up**: Using basic HTML5/CSS3 template from HTML5Up.net

**Heroku**: Node server deployment and hosting

**CircleCI**: Automatic building and continuous deployment from `master`

## Stretches and Extras
Possible additions:
* "Report" button to distinguish memes from non-memes, or to flag certain pages that don't produce quality content
* Batch meme analyses based on upvote/downvote ratings to determine the most popular pages/memes
* FB messenger plugin (similar to Giphy) to quickly post a recently-incepted meme
* FB messenger plugin to subscribe for frequent, definitively *dank memes*
