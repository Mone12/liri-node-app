require("dotenv").config();

let fs = require("fs");
var request = require('request');
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);


var command = process.argv[2];
var parameter = process.argv[3];

switch (command) {

  case 'concert-this':
    bandsInTown(parameter);
    break;

  case 'spotify-this-song':
    spotifySong(parameter);
    break;

  case 'movie-this':
    omdbInfo(parameter);
    break;

  case 'do-what-it-says':
    getRandom();
    break;

  default:
    console.log("Unknown Command!")
    break;

};

//This is the Bands in Town Function

function bandsInTown(parameter) {

  if ('concert-this') {
    var artist = "";
    for (var i = 3; i < process.argv.length; i++) {
      artist += process.argv[i];
      console.log('artist:', artist);
    }

  } else {
    artist = parameter;
    console.log(artist);
  }



  var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";


  request(queryUrl, function (error, response, body) {
    console.log(queryUrl);
    if (!error && response.statusCode === 200) {
      console.log("response good");

      var JS = JSON.parse(body);
      // console.log(body);
      for (i = 0; i < JS.length; i++) {
        var dateTime = JS[i].datetime;
        var month = dateTime.substring(5, 7);
        var year = dateTime.substring(0, 4);
        var day = dateTime.substring(8, 10);
        var dateForm = month + "/" + day + "/" + year;

        console.log("\n---------------------------------------------------\n");
        console.log("Name: " + JS[i].venue.name);
        console.log("City: " + JS[i].venue.city);
        if (JS[i].venue.region !== "") {
          console.log("Country: " + JS[i].venue.region);
        }
        console.log("Country: " + JS[i].venue.country);
        console.log("Date: " + dateForm);
        console.log("\n---------------------------------------------------\n");

      }
    }
  });
}

//Uses Spotify API to look for song details
let spotifyFig = "Spotify"

function spotifySong(parameter) {


  var searchTrack;
  if (parameter === undefined) {
    searchTrack = "The Signify-";
  } else {
    searchTrack = parameter;
  }



  spotify.search({
    type: 'track',
    query: searchTrack
  }, function (error, data) {
    if (error) {
      console.log('Error recorded: ' + error);
      return;
    } else {
      console.log("\n---------------------------------------------------\n");
      console.log("Artist: " + data.tracks.items[0].artists[0].name);
      console.log("Song: " + data.tracks.items[0].name);
      console.log("Preview: " + data.tracks.items[3].preview_url);
      console.log("Album: " + data.tracks.items[0].album.name);
      console.log("\n---------------------------------------------------\n");

    }

  });
};

//Searches OMDB API for movie and information about the movie

function omdbInfo(parameter) {


  var findMovie;
  if (parameter === undefined) {
    findMovie = "Mr. Nobody";
  } else {
    findMovie = parameter;
  };

  let omdbFig = "OMDB"


  var queryUrl = "http://www.omdbapi.com/?t=" + findMovie + "&y=&plot=short&apikey=trilogy";

  request(queryUrl, function (err, res, body) {
    var bodyOf = JSON.parse(body);
    if (!err && res.statusCode === 200) {
      console.log("\n---------------------------------------------------\n");
      console.log("Title: " + bodyOf.Title);
      console.log("Release Year: " + bodyOf.Year);
      console.log("IMDB Rating: " + bodyOf.imdbRating);
      console.log("Rotten Tomatoes Rating: " + bodyOf.Ratings[1].Value);
      console.log("Country: " + bodyOf.Country);
      console.log("Language: " + bodyOf.Language);
      console.log("Plot: " + bodyOf.Plot);
      console.log("Actors: " + bodyOf.Actors);
      console.log("\n---------------------------------------------------\n");
    }
  });
};
//activate RANDOM.TXT 

function getRandom() {


  fs.readFile('random.txt', "utf8", function (error, data) {

    if (error) {
      return display(error);
    }


    var dataArr = data.split(",");

    if (dataArr[0] === "spotify-this-song") {

      var songcheck = dataArr[1].trim().slice(1, -1);
      spotifySong(songcheck);
    }

  });

};

//send to LOG.TXT

function display(dataToLog) {

  console.log(dataToLog);

  fs.appendFile('log.txt', dataToLog + '\n', function (err) {

    if (err) return display('Error logging data to file: ' + err);
  });
}