//alert("Hello");

var memes = fs.readdirSync('memes/');
alert(memes);
var numberOfMemes = memes.size();
var index = 0;
alert("hey");

// Rotate memes every 1 sec
var delay = 1000;
var intervalHandle = setInterval(nextImage, delay);

function nextImage () {
    meme.setAttribute("src", "memes/" + memes[index]);
    myLink.setAttribute("href", memes[index]);
    meme.setAttribute("title", memes[index]);
    index++;
    if (index >= memes.length) {
        index = 0;
    }

    alert("memes/" + memes[index]);

    // Loop again
    var intervalHandle = setInterval(nextImage, delay);
}

meme.onclick = function() {
    clearInterval(intervalHandle);
}

document.getElementById("next").onclick = function() {
    getDurationNext();
}

document.getElementById("prev").onclick = function() {
    getDurationPrev();
}

alert("Goodbye");