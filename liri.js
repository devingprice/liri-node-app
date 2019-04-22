require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment")
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var fs = require("fs");

function runLiri(command, name){
    switch (command) {
        case `concert-this`:
            concertThis(name);
            break;

        case 'spotify-this-song':
            spotifyThisSong(name);
            break;

        case 'movie-this':
            movieThis(name);
            break;

        case 'do-what-it-says':
            doWhatItSays();
            break;
    }
}

function concertThis(name) {
    var url = "https://rest.bandsintown.com/artists/" + name + "/events?app_id=codingbootcamp";
    axios.get(url).then(function (response) {
        console.log(response.data)
        response.data.map(function(concert){
            // for (var concert in response.data) {
            var name = concert.venue.name;
            var location = concert.venue.city +', '+ concert.venue.country;
            var date = moment(concert.datetime, "YYYY-MM-DD")
                .format('MM/DD/YYYY');

            console.log({
                name, location, date
            })
        })
    })
}

function spotifyThisSong(name) {
    if( !name || name.length < 1 ){
        name = "The Sign by Ace of Base"
    }
    spotify.search({ type: 'track', query: name }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        var firstTrack = data.tracks.items[0]
        var artist = firstTrack.artists[0].name;
        var name = firstTrack.name;
        var previewLink = firstTrack.external_urls.spotify;
        var albumName = firstTrack.album.name;
        
        console.log( {
            name, artist, previewLink, albumName
        })
    });
}

function movieThis(name){
    if (!name || name.length < 1) {
        name = "Mr. Nobody"
    }
    var url = "https://www.omdbapi.com/?t=" + name + "&apikey=trilogy";
    axios.get(url).then(function (response) {
        var movie = response.data;

        var title = movie.Title;
        var year = movie.Year;
        var imdbRating = movie.imdbRating;
        var rottenTomatoes = movie.Ratings[1].Value;
        var country = movie.Country;
        var language = movie.Language;
        var plot = movie.Plot;
        var actors = movie.Actors;
        console.log({
            title, year, imdbRating, rottenTomatoes, country, language, plot, actors
        })
    })
}

function doWhatItSays(){
    fs.readFile('./random.txt', 'utf8', function(err, data){
        console.log(data)
        var [command, name] = data.split(',');
        runLiri(command, name);
    })
}

//default
var command = process.argv[2];
var name = process.argv.splice(3, process.argv.length - 1).join(' ');
runLiri(command, name);