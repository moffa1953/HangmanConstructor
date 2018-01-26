var colors = require("colors")
var inquirer = require("inquirer");
var clearTerminal = require("clear-terminal")
var gameWords = require("./movie.js");
var getLetters = require("./getLetters.js")
var gameNo = 0
var movieData = ""
var newGame = ""
var newLetter = ""
var letter = ""

gameDataArr = [];
clearTerminal()
//getUsersChoice(gameNo)
//letter = sendletter()

game()

		function getUsersChoice(gameNo) {
			  var newLetter = getLetters.getUserInput(gameNo, function(letter) {
			  	currChoice(letter);		    
			  });
		}

		function currChoice(letter) {
			switch (letter) {
			    case "?":
			        if(movieData.lettersUsed == "") {
			        	console.log("\n\tNo previous entries were made for this game\n".yellow)
			        } else {
			        	console.log("\n\tPrevious entries made on this game are:".yellow)
			        	console.log("\n\t"+movieData.lettersUsed.split("")+"\n")
			        }
			        break;
			     case "^":
			     		console.log("\n\n\tYou have decided to end the game".red)
			     		return
			        	break;
			    default:			
						
					 movieData.userChoice = letter
					 movieData.checkEntry()
					 movieData.updateStage()
					 console.log("\n\t"+movieData.selectionStatus)
					 console.log("\n\t"+movieData.displayStage+"\n".rainbow)

		    }            // end of switch letter

		    if(movieData.displayStage.search("_") == -1) {
		             winner();
		             startNewGame()
		    } else {
		           	if(movieData.attempts != 7) {
		       			getUsersChoice(gameNo)
		       		} else {
						startNewGame()
		       		}
	       	 }
		}

		function startNewGame() {
             	gameNo += 1
             	if(gameNo < gameDataArr.length) {
     		 		movieData = gameDataArr[gameNo]
					initGame(movieData)
					getUsersChoice(gameNo)
				} else {
					console.log("\n\nThe Game is over! Thank you for playing".red)
				}			
		}

		function winner() {
			console.log("\n\t********************************".red)
			console.log("\n\t*      YOU ARE A WINNER !!     *".red)
			console.log("\n\t********************************".red)			

		}
		function game() {
			  var newGame = gameWords.getGameData("", function(gameDataArr) {
					 		movieData = gameDataArr[gameNo]
					  		initGame(movieData)
					  		getUsersChoice(gameNo)
  			    
			  });
		}

		function playGame(movieData) {
			 initGame(movieData.title,movieData.hint,movieData.displayStage,movieData.selectionStatus)
		}

		// function initGame(title,hint,displayStage,selectionStatus) {
		function initGame(movieData) {
				movieData.updateStage()
				console.log("\t*********** +---\n\t* HANGMAN * |  @\n\t*********** | /|\\\n\t            | / \\".rainbow)

				console.log("\n\tThis is the start of Game "+(gameNo+1));
				console.log("\t----------------------------\n")
				console.log("\tHere is a hint: "+movieData.hint+"\n")
				
		     	console.log("\n\t"+movieData.displayStage)
		     	console.log("\n\t"+movieData.selectionStatus)
		}
