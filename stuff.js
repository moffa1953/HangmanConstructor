var fs = require("fs");
console.log("loaded")
function getGame(gameNo, callback) {

  // We will read the data need for a game
  fs.readFile("games.txt", "utf8", function(err, data) {
    if (err) {
      return console.log(err);
    }

    // get data for one game
    var data = data.split("|");
    var gameDetails = data[gameNo].split("^")
    console.log(gameDetails)
    // var currentGame = new GameData(gameDetails[0],gameDetails[1])
    // var result = 0;
    // console.log(result);

    // console.log(result);
    
    // We will then print the final balance rounded to two decimal places.
    var movieData = new GameData(gameDetails[0],gameDetails[1])
    callback(movieData);
  });
}

function GameData(title,hint) {
  this.title = title,
  this.hint  = hint,
  this.convTitle = this.title.toUpperCase()
}

module.exports = {
  getGameData:getGame
}