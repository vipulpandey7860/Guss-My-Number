"use strict";

let secretNumber = Math.floor(Math.random() * 21);
let score = 20;
let highscore = 0;

function displayMessage(message) {
    document.querySelector(".message").textContent = message;
}

function mainLogic() {
    document.querySelector(".check").addEventListener("click", function () {
        const guessFeild = Number(document.querySelector('.guess').value);
        const secretNumberFeild = document.querySelector(".number")
        const highScoreFeild = document.querySelector('.highscore');
        const scoreField = document.querySelector('.score');
        const animateText = document.querySelector('.animateText');

        if (guessFeild > 20 || guessFeild < 0) {
            displayMessage("Out of range! 🚫");
            score--;
            scoreField.textContent = score;
        }

        else if (!guessFeild) {
            displayMessage("⛔️ No number guessed!");
        }

        else if (guessFeild === secretNumber) {

            displayMessage("You Win! correct number 🏆");

            secretNumberFeild.textContent = secretNumber;
            document.querySelector("body").style.backgroundColor = "#60b347";
            secretNumberFeild.style.width = "30rem";
            animateText.style.display = 'none';


            if (score > highscore) {
                highscore = score;
                highScoreFeild.textContent = highscore;
            }

        } else if (guessFeild !== secretNumber) {
            if (score > 1) {
                displayMessage(guessFeild > secretNumber ? '📈 Too high!' : '📉 Too low!');
                score--;
                scoreField.textContent = score;
            } else {
                displayMessage('💥 You lost the game!');
                document.querySelector('body').style.backgroundColor = 'red';
                scoreField.textContent = 0;
                animateText.style.display = 'none';

            }
        }
    });

}

function reset() {
    document.querySelector('.again').addEventListener('click', function () {
        score = 20;
        secretNumber = Math.floor(Math.random() * 21);

        const secretNumberFeild = document.querySelector(".number")
        const scoreField = document.querySelector('.score');

        displayMessage('Start guessing...');
        scoreField.textContent = score;
        secretNumberFeild.textContent = '?';
        document.querySelector('.guess').value = '';

        document.querySelector('body').style.backgroundColor = '#222';
        secretNumberFeild.style.width = '15rem';
        document.querySelector('.animateText').style.display = 'initial';
    });
}





mainLogic();
reset();
