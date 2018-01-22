    var fs = require("fs");
    var colors = require("colors")

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
             // movieData = JSON.stringify(movieData,null,2)
              movieData.displayStage
              callback(movieData)
          });
    }

    function GameData(title,hint,gameCount) {
          this.title = title;
          this.hint  = hint;
          this.convTitle = this.title.toUpperCase();
          this.gameCount = gameCount;
          this.attempts = 7;
          this.lettersUsed = "";
          this.openSelection = "[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz]";
          this.userChoice = "#";
          this.displayStage = "";
          this.selectionStatus = "";
          this.updateStage = function() {

              this.selectionStatus = ""

              this.userChoice = this.userChoice.toUpperCase()

              if(this.lettersUsed.search(this.userChoice) != -1) {
                    this.selectionStatus = "/n/tThis letter has been used before".yellow 
              } else {
                    this.lettersUsed = this.lettersUsed + this.userChoice;

                    if(this.convTitle.search(this.userChoice) != -1) {
                          this.selectionStatus = "/n/tYes. we found a hit!!"
                    } else {

                          // # is used to initialize the game and should not be
                          // considered as an error
                          if(this.userChoice != "#") { 
                                this.attempts += 1;
                                if(this.attempts == 7) {
                                    this.selectionStatus = "/n/tSorry - You ran out of attempts/n/tThe Answer was "+this.title+" ".red
                                } else {
                                    this.selectionStatus = "/n/tThe letter " + this.userChoice + " is not in the movie title".yellow
                                }
                           }
                    }
              }
              // check the openselection to find if the letter is still in the
              // list. If it finds the letter, it will replace that letter with
              // a pound sign (#). The 'ig' option will replace all of the letters
              // found in the title and is case insenitive
              reg = new RegExp(this.openSelection, "ig");
              reg = RegExp(this.userChoice, "ig");
              this.openSelection = this.openSelection.replace(reg,"#");

              // all letters that are still in openselection will appear as
              // underscores. If the letter was replaced by a # in the previous
              // routine, those lettersb will appear on the stage display
              var reg = RegExp(this.openSelection, "g");
              this.displayStage = this.title.replace(reg, "_");

              // inserting a space between each letter otherwise the placeholder
              // underscore appears as a solid line
              workdisplay = "";
              for(i=0; i < this.displayStage.length; i++) {
                  workdisplay = workdisplay + this.displayStage.charAt(i) + " ";
              }
              this.displayStage = workdisplay; 

              // clear for the next letter choice
              this.userChoice = ""     
          };
    }

module.exports = {
  getGameData:getGame
}