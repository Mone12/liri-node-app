# Liri-node-app

### Liri Bot Homework Demo - (https://youtu.be/cyBp1PgOUKs) 

### Summary

The Liribot is a command line app, similar to Siri, that uses Node to take in parameters and gives back data using Node js, node-spotify-api, Bands In Town API, Omdb API, axios, moment, and dotenv. The purpose of this app is to find concerts, songs and movies through user input.

### Commands

Making sure you are in the liri file in the terminal you are able to choose between these four commands.

* spotify-this-song

(example) node liri spotify-this-song "Purple Rain"

Searches for songs using the node-spotify-api and should display the song information that includes artist and album name.


* concert-this

(example) node liri concert-this "Ariana Grande"

Uses the Bands In Town API to search for concerts near by with the location and date included.

* movie-this

(example) node liri movie-this "Cinderella"

Uses the Omdb API to search for movie names, including year and date of release, and cast names.

* do-what-it-says

(example) node liri do-what-it-says

When the user puts in this commands, node grabs the text from the 'random.txt' file and displays in the command line.

### Npm packages used
* dotenv
* fs
* request


