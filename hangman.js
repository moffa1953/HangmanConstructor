var fs = require('fs');
var inquirer = require("inquirer");
var gameWords = require("./movie.js");
gameNo = 1
var movieData = ""
var newGame = ""
game(gameNo)



function game(gameNo) {
  var newGame = gameWords.getGameData(gameNo, function(movieData)
  {
  	movieData = JSON.parse(movieData)
  	playGame(movieData) 
    
  });
}

function playGame(movieData) {

	initGame(movieData.title,movieData.hint)

}

function initGame(title,hint) {
		console.log("")
		console.log("")
		console.log("")
		console.log("")
		console.log("")
		console.log("This is the start of Game "+gameNo);
		console.log("----------------------------")
		console.log("");
		console.log("Here is a hint: "+hint)
		
	    openSelection = "[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz]";
        reg = new RegExp(openSelection, "g");
        userChoice = "#";
        updateStage(title)
}

function updateStage(title) {
		reg = RegExp(userChoice, "g");
		openSelection = openSelection.replace(reg,"#");

		var reg = RegExp(openSelection, "g");
		displayStage = title.replace(reg, "_");
		console.log("")
		console.log(displayStage)
}
