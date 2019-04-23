<p align="center"><img width=60% src="https://github.com/devingprice/liri-node-app/blob/master/images/githubHeader.png"></p>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
![Javascript](https://img.shields.io/badge/language-Javascript-green.svg?logo=javascript)
![Node](https://img.shields.io/badge/Javascript-Node.js-green.svg?logo=node.js)
![Axios](https://img.shields.io/badge/Library-Axios-orange.svg)
![OMDB](https://img.shields.io/badge/API-OMDB-blue.svg)
![Spotify](https://img.shields.io/badge/API-Spotify-blue.svg)
![BandsInTown](https://img.shields.io/badge/API-Bands_In_Town-blue.svg)

<p align="center">Liri is a <span style="font-weight:bold">L</span>anguage <span style="font-weight:bold">I</span>nterpretation and <span style="font-weight:bold">R</span>ecognition <span style="font-weight:bold">I</span>nterface for the command line. </p>


## Installation

```bash
git clone https://github.com/devingprice/liri-node-app
npm i
```

## Running Liri

<p align="center"><img src="https://github.com/devingprice/liri-node-app/blob/master/images/carbon.svg"></p>

### Commands

```bash
node liri concert-this <artist name>
node liri spotify-this-song <song name>
node liri movie-this <movie name>
node liri do-what-it-says
```

### Responses : 

| Command       | Response         |
| ------------- |:----------------:|
| concert-this  |   Venue Name     |
|               |   Venue Location |
|               |   Date of Event  |
| spotify-this-song | Artist Name  |
|                   | Song Name    |
|                   | Preview Link |
|                   | Album Title  |
| movie-this | Title        |
|            | Year         |
|            | IMDB Rating  |
|            | Rotten Tomatoes Rating |
|            | Country Produced In |
|            | Language     |
|            | Plot Summary |
|            | Actors       |

## Logging

Liri creates a log of every command sent in log.txt so you can keep track of what she has done.
