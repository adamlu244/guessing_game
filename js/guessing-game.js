/* 

Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "npm test".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.

*/
const submitButtonEl = document.querySelector(".submitButton");
const promptEl = document.querySelector(".prompt");
const secretNum = Math.floor(Math.random() * 100) + 1;
const pastGuess = document.querySelector(".pastGuess")
let guessCount = 1;
const resetButton = document.querySelector(".playAgain");
// const pastGuess = document.querySelector(".pastGuessList");
// const pastGuess1 = document.querySelector(".g1")
// const pastGuess2 = document.querySelector(".g2")
// const pastGuess3 = document.querySelector(".g3")
// const pastGuess4 = document.querySelector(".g4")
// const pastGuess5 = document.querySelector(".g5")
// This event listener will choose a random number, and return a prompt depending
// on if you're right, too high, too low, or if your number is not within 1-100
submitButtonEl.addEventListener("click", function () {
    let userInput = document.querySelector(".inputBox").value;
        pastGuess.textContent += userInput + " ";
    // if (pastGuess1 !== userInput) {
    //     pastGuess1.textContent = userInput
    // } else if (pastGuess2 !== userInput) {
    //     pastGuess2.textContent = userInput
    // } else if () {
    //     pastGuess3.textContent = userInput;
    // } else if () {
    //     pastGuess4.textContent = userInput;
    // } else if () {
    //     pastGuess5.textContent = userInput;
    // }
    if (userInput == secretNum) {
        promptEl.textContent = "You figured out the number I was thinking of! YOU WIN";
    } else if (userInput < 1 || userInput > 100) {
        promptEl.textContent = "Invalid entry, you must enter a number between 1 and 100";
    } else if (guessCount === 5) {
        promptEl.textContent = "GAME OVER, YOU LOSE";
        submitButtonEl.disabled = true;
    } else if (userInput > secretNum) {
        promptEl.textContent = "Your guess is too high";
    } else if (userInput < secretNum) {
        promptEl.textContent = "Your guess is too low";
    }
    guessCount++;
});

resetButton.addEventListener("click", function() {
    window.location.reload();
});




