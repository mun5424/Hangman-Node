var Word = require("./Word.js");
var inquirer = require("inquirer");

var artists = ["KENDRICK LAMAR", "DRAKE", "JAY Z", "CARDI B", "ASAP ROCKY", "KANYE WEST", "MEEK MILL", "MIKE JONES", "CHRIS BROWN", "BUSTA RHYMES", "LIL WAYNE", "SNOOP DOGG", "LUDACRIS", "DR DRE", "NAS", "TUPAC SHAKUR", "TYGA", "EMINEM"];

console.log("Welcome to the Hangman game!");

var guessesRemaining = 10;


var word = new Word(artists[Math.floor(Math.random() * artists.length)]);

var runGame = function (word) {

    inquirer.prompt([
        {
            name: "input",
            message: "Guess a letter! "
        }
    ]).then(function (answer) {
            var guess = answer.input.toUpperCase();
            if (guess.length > 1 || !guess.match(/^[a-zA-Z]+$/)) {
                console.log("That is an invalid character. Type an alphabetical letter to guess!");
                runGame(word);
            }
            else {
                word.guessLetter(guess);
                console.log(word.stringify());

                if (word.guessedAll()) {
                    console.log("You got it right! Next word!");
                    var nextWord = new Word(artists[Math.floor(Math.random() * artists.length)]);
                    runGame(nextWord);
                }
                else {
                    console.log(word.word.indexOf(guess));
                    if (word.word.indexOf(guess) !== -1) {
                        console.log("CORRECT!!");
                    }
                    else {
                        guessesRemaining--;
                        console.log("INCORRECT!! " + guessesRemaining + " guesses remaning!");
                    }
                    runGame(word);
                }
            }
        }
        );
}

runGame(word);