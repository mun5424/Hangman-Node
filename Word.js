var Letter = require("./Letter");

var Word = function(word)
{
    this.word = word;
    this.letters = [];
    for(var i = 0; i < word.length; i++) 
    {
        var letter = new Letter(word[i]);
        this.letters.push(letter);  
    }

    this.stringify = function()
    {
        var str = "";
        for(var i = 0; i < this.letters.length; i++)
        {
            var letter = this.letters[i]; 
            str += letter.getLetter() + " ";
        }
        return str; 
    }
    
    this.guessLetter = function(character)
    {
        for(var i = 0; i < this.letters.length; i++)
        {
            var letter = this.letters[i]; 
            letter.checkLetter(character);
        }
    }
    this.guessedAll = function()
    {
        for(var i = 0; i < this.letters.length;i++) 
        {
            var letter = this.letters[i];
            if(!letter.guessed && letter)
                return false;
        }
        return true; 
    }
}


module.exports = Word;