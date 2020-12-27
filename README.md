# Liri Bot (node-app)

The Liribot is a command line app, similar to Siri, that uses Node to take in parameters and gives back data using Node js, node-spotify-api, Bands In Town API, Omdb API, axios, moment, and dotenv. The purpose of this app is to find concerts, songs and movies through user input.

## How to access the app

1. Clone repo
2. Run `npm install`

## Usage

Making sure you are in the liribot folder in the terminal, you are able to choose between these four Commands:
 1. `spotify-this-song`
 2. `concert-this`
 3. `movie-this`
 4. `do-what-it-says`

To search for a song, concert or movie, enter the commands like so:
```
node liri.js spotify-this-song "<song of choice>"
``` 
> Searches for songs using the node-spotify-api and should display the song information that includes artist and album name.

```
node liri.js concert-this "<artist of choice>"
```
> Uses the Bands In Town API to search for concerts near by with the location and date included.

```
node liri.js movie-this "<movie of choice>"
```
> Uses the Omdb API to search for movie names, including year and date of release, and cast names.

```
node liri do-what-it-says
```
> When the user puts in this command, node grabs the text from the 'random.txt' file and displays it in the command line.

## Demo

(https://youtu.be/cyBp1PgOUKs) 

## Built with:
 * JavaScript/Jquery
 * Node.js

### Npm packages
* dotenv
* fs
* request

### APIs
* Spotify API
* Omdb API
* Bands In Town API

## Credits
<b>Created By:</b> Mone Duncans-Francis -[Mone12](https://github.com/Mone12)


