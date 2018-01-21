    var fs = require("fs");

    function getGame(gameNo, callback) {

          // We will read the data needed for one game
          fs.readFile("games.txt", "utf8", function(err, data) {
              if (err) {
                  return console.log(err);
              }

              // get data for one game
              var data = data.split("|");
              var gameDetails = data[gameNo].split("^")

              var movieData = new GameData(gameDetails[0],gameDetails[1],data.length)
              movieData = JSON.stringify(movieData,null,2)
              callback(movieData)
          });
    }

    function GameData(title,hint,gameCount) {
          this.title = title,
          this.hint  = hint,
          this.convTitle = this.title.toUpperCase(),
          this.gameCount = gameCount,
          this.tries = 0,
          this.lettersUsed = []
    }

module.exports = {
  getGameData:getGame
}