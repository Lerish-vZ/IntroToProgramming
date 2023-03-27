//Chapter 7

//Creating a prompt
// var name = prompt("What's your name?");
// alert("Hello " + name);



//Using confirm
// var likesCats = confirm("Do you like cats?");
// if (likesCats) { 
//     alert("You're a cool cat!");
// } else {
//     alert("Yeah, that's fine. You're still cool!");
// }


/////////////////////Hangman Game////////////////////////////////

//Choosing a random word
// var words = [
//     "javascript",
//     "monkey",
//     "amazing",
//     "pancake",
//     "book",
//     "dance",
//     "omnipetent",
//     "freedom"
// ];

// var word = words[Math.floor(Math.random() * words.length)];

//Creating the answer array 
// var answerArray = [];
// for (var i = 0; i < word.length; i++) {
//     answerArray[i] = "_";
// }

// var remainingLetters = word.length;
// var amountOfGuesses = word.length + 4;  

//Coding the game loop
// while ((remainingLetters > 0) && (amountOfGuesses > 0)) {
   //show the player their proggress 
//    alert(answerArray.join(" "));

   //Get a guess from the player
//    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
//     guess = guess.toLowerCase();    

//     if (amountOfGuesses === 2) {
//         alert("Careful, you only have " + amountOfGuesses + " guesses left!");
//     }
//    if (guess.length === null) {
//         //exit the game loop
//         break;
//     } else if(guess.length !== 1) {
//         alert("Please enter a single letter.");
//     } else {
//         //Update the game state with the guess
//         for (var j = 0; j < word.length; j++){
//             if (word[j] === guess) {
//                 if (answerArray[j] !== "_") {
//                     alert("You have already guessed this letter.");
//                     break;
//                 }

//                 answerArray[j] = guess; 
//                 remainingLetters--;
//                 amountOfGuesses--;
             //}           
        //}
    //}
    //The end of the game loop
//}
//show the answer and congratulate the player
// alert(answerArray.join(" "));
// alert("Good job! The answer was " + word + ".");




//////////////////////////////////////////////////////Hangman game with functions////////////////////////////////////////////////////
var answerArray = [];

var pickWord = function () {
    //return a random word
    var words = ["javascript",
                "monkey",
                "amazing",
                "pancake",
                "book",
                "dance",
                "omnipetent",
                "freedom", 
                "beautiful"];
    words[(Math.floor(Math.random() * words.length))];
};

var setupAnswerArray = function (word) {
    //return the answer array
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
};

var showPlayerProgress = function (answerArray) {
    //use alert to show player their progress
    alert(answerArray.join(" "));
};

var getGuess = function() {
    //Use prompt to get a guess
    guess = prompt("Guess a letter, or click Cancel to stop playing.");
    guess = guess.toLowerCase();
};

var updateGameState = function(guess, word, answerArray) {
    //update answerArray and retun a number showing how many times the guess appears in the word so remainingLetters can be updated
    
};

var showAnswerAndCongratulatePlayer = function (answerArray) {
    //use alert to show the answer and congratulate the player
}