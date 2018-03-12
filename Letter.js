

var Letter = function(character)
{
    this.character = character; 
    this.guessed = false; 
    this.getLetter = function() 
    {
        if(this.guessed)
            return this.character;
        else
            return "_";
    };
    this.checkLetter = function(guess) 
    {
        if(this.character === guess || this.character === " ")
            this.guessed = true;
        return this.guessed;
    };
}


module.exports = Letter; 
