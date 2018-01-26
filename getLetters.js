var inquirer = require("inquirer")
//getUserInput()

function getUserInput(gameNo,callback) {

        inquirer.prompt([{
        
                name: "letter",
                message: "Enter a letter, ? letters entered, ^ to end: ",
                validate: function(value) {
                      if ( /^[a-zA-Z?^]/.test(value) && value.length === 1 && value != null) {
                          return true
                      } else {
                          console.log("Invalid Entry: only one letter A-Z, a-z or ?")
                      }                      
                }

            }]).then(function(answers) {
                   callback(answers.letter)
                })
  
  }



module.exports = {
  getUserInput:getUserInput
}