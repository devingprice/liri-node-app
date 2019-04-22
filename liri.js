require("dotenv").config();
var keys = require("./keys.js");

var command = process.argv[2];
var name = process.argv.splice(3, process.argv.length-1).join(' ');
console.log( name )

switch (command) {
    case `concert-this`:
        break;

    case 'spotify-this-song':
        break;

    case 'movie-this':
        break;

    case 'do-what-it-says':
        break;
}