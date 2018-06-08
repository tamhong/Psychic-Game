//Global variable declaration
var wins = 0;
var losses = 0;
var guesses = 9;
var lettersGuessed= [];

//Array of letters to be randomly generated for computerChoice
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Initial generated letter 
var computerChoice = letters[Math.floor(Math.random() * letters.length)];

//So that the text will display at initial loading of page
window.onload = function(start) {
    //Main game function
    document.onkeypress = function(event) {
        var userGuess = event.key;
        lettersGuessed.push(userGuess);

        if(userGuess === computerChoice){
            wins++;
            guesses=9;
        } else{
            guesses--;
        }
        if(guesses === 0){
            losses++;
            guesses=9;
        }
        if(guesses===9){
            computerChoice = letters[Math.floor(Math.random() * letters.length)];
            lettersGuessed = [];
        }

        //Updated game results

        document.getElementById('wins').innerHTML = "Wins: " +wins;
        document.getElementById('losses').innerHTML = "Losses: " +losses;
        document.getElementById('guesses').innerHTML = "Guesses Left: " +guesses;
        document.getElementById('lettersGuessed').innerHTML = "Letters Guessed: " +lettersGuessed.join(', ');

    }

    document.getElementById('wins').innerHTML = "Wins: " +wins;
    document.getElementById('losses').innerHTML = "Losses: " +losses;
    document.getElementById('guesses').innerHTML = "Guesses Left: " +guesses;
    document.getElementById('lettersGuessed').innerHTML = "Letters Guessed: ";

}







