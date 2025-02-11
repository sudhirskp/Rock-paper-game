let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".img");
const result = document.querySelector("#msg");

const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return options[random];
}

let userChoice;
let compChoice;

// Function for determining the winner
const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        console.log("You Win !!!");
        result.style.color = "white";
        result.innerText = `You Win !!! Your ${userChoice} beats ${compChoice}`;
    } else {
        compScore++;
        console.log("You Lose !!!");
        result.style.color = "red";
        result.innerText = `You Lose !!! Your ${userChoice} was beaten by ${compChoice}`;
    }

    document.getElementById("user-score").innerText = `User Score: ${userScore}`;
    document.getElementById("comp-score").innerText = `Computer Score: ${compScore}`;
}

// For drawing the game
const Draw = () => {
    console.log("The game was a draw.");
    result.style.color = "orange";
    result.innerText = "The Game was Draw !!! - Both options are the same";
}

// Function to play the game
const playgame = (userChoice) => {
    console.log("User choice =", userChoice);
    // Computer choice
    compChoice = gencompchoice();
    console.log("Computer choice =", compChoice);

    if (userChoice === compChoice) {
        // Draw the game
        Draw();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // Options: paper or scissors
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin);
    }
}

// Event listeners for each choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});
