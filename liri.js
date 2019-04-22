require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");

var command = process.argv[2];
var name = process.argv.splice(3, process.argv.length-1).join('_');
console.log( name )

switch (command) {
    case `concert-this`:
        concertThis(name);
        break;

    case 'spotify-this-song':
        break;

    case 'movie-this':
        break;

    case 'do-what-it-says':
        break;
}

function concertThis(name){
    var url = "https://rest.bandsintown.com/artists/" + name + "/events?app_id=codingbootcamp";
    axios.get(url).then(function(response){
        console.log( response.data )
    })
}