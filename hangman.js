var colors = require("colors")
var inquirer = require("inquirer");
var gameWords = require("./movie.js");
gameNo = 0
var movieData = ""
var newGame = ""
game(gameNo)

		function game(gameNo) {
			  var newGame = gameWords.getGameData(gameNo, function(movieData) {
			  	movieData.updateStage()
			  	playGame(movieData)		    
			  });
		}

		function playGame(movieData) {
			 initGame(movieData.title,movieData.hint,movieData.displayStage,movieData.selectionStatus)
		}

		function initGame(title,hint,displayStage,selectionStatus) {

				console.log("\n\n\n\t*********** +---\n\t* HANGMAN * |  @\n\t*********** | /|\\\n\t            | / \\".rainbow)

				console.log("\n\tThis is the start of Game "+(gameNo+1));
				console.log("\t----------------------------\n")
				console.log("\tHere is a hint: "+hint+"\n")
				
		     	console.log("\n\t"+displayStage)
		     	console.log("\n\t"+selectionStatus)
		}
