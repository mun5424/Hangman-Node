var Word = require("./Word.js");
var inquirer = require("inquirer");

var artists = ["KENDRICK LAMAR", "DRAKE", "JAY Z", "CARDI B", "ASAP ROCKY", "KANYE WEST", "MEEK MILL", "MIKE JONES", "CHRIS BROWN", "BUSTA RHYMES", "LIL WAYNE", "SNOOP DOGG", "LUDACRIS", "DR DRE", "NAS", "TUPAC SHAKUR", "TYGA", "EMINEM"];

console.log("Welcome to the Hangman game!");

var guessesRemaining = 10;


var word = new Word(artists[Math.floor(Math.random() * artists.length)]);
var wrongGuesses = [];


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
                    guessesRemaining = 10; 
                    runGame(nextWord);
                }
                else {
                    if (word.word.indexOf(guess) !== -1) {
                        console.log("\x1b[32m", "CORRECT!!");
                        runGame(word); 
                    }
                    else {
                        if(wrongGuesses.indexOf(guess) !== -1)
                        {
                            console.log("\x1b[31m", "You have already guessed that letter! \n");
                            runGame(word); 
                        }
                        else
                        {
                            wrongGuesses.push(guess);
                            guessesRemaining--;
                            if(guessesRemaining == 0) 
                            {
                                console.log("You have no more guesses! the correct word was " + word.word);
                                var nextWord = new Word(artists[Math.floor(Math.random() * artists.length)]);
                                guessesRemaining = 10; 
                                runGame(nextWord);
                            }
                            else{
                                console.log("\x1b[31m", "INCORRECT!! " + guessesRemaining + " guesses remaining! \n");
                                runGame(word); 
                            }
                        }
                    }
                }
            }
        }
        );
}

runGame(word);