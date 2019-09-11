    // Variables // 
    var letterOptions = "abcdefghijklmnopqrstuvwxyz"
    var selectedLetter = "";
    var userChoice = "";
    var wrongLetters = [];

    //counters//
    var winCount = 0;
    var lossCount = 0;
    var livesLeft = 9;

// functions and loops //
function onkeyup(pressed) {
    pressed;
}
function gameStart() {
    selectedLetter = letterOptions[Math.floor(Math.random() * letterOptions.length)];
    
    //counter reseting//
    livesLeft = 9;
    wrongLetters = [];

    //function//

    //changes to the html//
    // document.getElementById("letterToGuess").innerHTML = selectedLetter;
    document.getElementById("lettersGuess").innerHTML = wrongLetters;
    document.getElementById("numWins").innerHTML = winCount;
    document.getElementById("numLoss").innerHTML = lossCount;
    document.getElementById("numLives").innerHTML = livesLeft;
}
function checkLetter(userChoice){
    if (userChoice !== selectedLetter) {
        wrongLetters.push(userChoice);
        livesLeft--;
    }
}
function cycleEnd(){
    console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Lives Left: " + livesLeft);
    //win/loss condition//
    console.log("user", userChoice)
    console.log("text", selectedLetter)
    if (userChoice === selectedLetter) {
        winCount++;
        alert("You guessed the letter!");

        document.getElementById("numWins").innerHTML = winCount;
    
        gameStart();
    }

    else if (livesLeft === 0) {
        lossCount++;
        alert("You failed to guess the letter :C");

        document.getElementById("numLoss").innerHTML = lossCount;
    
        gameStart();
    }
}

// game code //
gameStart();

document.onkeyup = function(event) {
    userChoice = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetter(userChoice);
    document.getElementById("numLives").innerHTML = livesLeft;
    // document.getElementById("letterToGuess").innerHTML = selectedLetter;
    document.getElementById("lettersGuess").innerHTML = wrongLetters;
    cycleEnd();
}
