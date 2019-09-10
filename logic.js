    // Variables // 
    var numberOptions = ["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty","twentyone","twentytwo","twentythree","twentyfour","twentyfive","twentysix","twentyseven","twentyeight","twentynine","thirty"]
    var selectedNumber = "";
    var letterinNumber = [];
    var numBlanks = 0;
    var blanksAndCorrect = [];
    var wrongLetters = [];

    //counters//
    var winCount = 0;
    var lossCount = 0;
    var livesLeft = 9;

// functions and loops //

function gameStart() {
    selectedNumber = numberOptions[Math.floor(Math.random() * numberOptions.length)];
    letterinNumber = selectedNumber.split("");
    numBlanks = letterinNumber.length;

    //counter reseting//
    livesLeft = 9;
    blanksAndCorrect = [];
    wrongLetters = [];

    //function for blanks//
    for (var i=0; i<numBlanks; i++) {
        blanksAndCorrect.push("_");
    }

    //changes to the html//
    document.getElementById("numberToGuess").innerHTML = blanksAndCorrect.join(" ");
    document.getElementById("lettersGuess").innerHTML = wrongLetters;
    document.getElementById("numWins").innerHTML = winCount;
    document.getElementById("numLoss").innerHTML = lossCount;
    document.getElementById("numLives").innerHTML = livesLeft;

    //debug//
    console.log(selectedNumber);
    console.log(letterinNumber);
    console.log(numBlanks);
    console.log(blanksAndCorrect);
}
        //more functions for checking//
function checkNumber(letter) {

    var isLetterInNumber = false;
    for (var i=0; i<numBlanks; i++){
        if (selectedNumber[i] == letter) {
            isLetterInNumber = true;
        }
    }

    if(isLetterInNumber) {
        for (var i=0; i<numBlanks; i++){
            if(selectedNumber[i] == letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    }

    else {
        wrongLetters.push(letter);
        livesLeft--
    }

    console.log(blanksAndCorrect);
}

function cycleEnd(){
    console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Lives Left: " + livesLeft);
    
    document.getElementById("numLives").innerHTML = livesLeft;
    document.getElementById("numberToGuess").innerHTML = blanksAndCorrect.join(" ");
    document.getElementById("lettersGuess").innerHTML = wrongLetters.join(" ");
    //win/loss condition//
    if (letterinNumber.toString() == blanksAndCorrect.toString()) {
        winCount++;
        alert("You guessed the number!");

        document.getElementById("numWins").innerHTML = winCount;
    
        gameStart();
    }

    else if (livesLeft == 0) {
        lossCount++;
        alert("You failed to guess the number :C");

        document.getElementById("numLoss").innerHTML = lossCount;
    
        gameStart();
    }
}
// game code //
gameStart();

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkNumber(letterGuessed);
    cycleEnd;
    
    //more debug//
    console.log(letterGuessed);
}
