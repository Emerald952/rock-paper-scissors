function getComputerChoice(){
    let ch = Math.floor(Math.random() * 3);
    if(ch == 0) return "Rock";
    else if(ch == 1) return "Paper";
    else return "Scissors";
}

function getHumanChoice(choice){
    choice = choice.toLowerCase();
    if(choice === "rock")return "Rock";
    else if(choice === "paper") return "Paper";
    else if(choice === "scissors")return "Scissors";
    else return null;
}

function playRound(humanChoice, computerChoice){
    if(humanChoice == computerChoice )return "Tie";
    else if(humanChoice === "Rock" && computerChoice === "Scissors"){
        return "Human";
    }
    else if(humanChoice === "Paper" && computerChoice === "Rock"){
        return "Human";
    }
    else if(humanChoice === "Scissors" && computerChoice === "Paper"){
        return "Human";
    }
    else return "Computer";
}


function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let  i = 5;
    while(i--){
        let choice = prompt("Enter Your Choice (Rock, Paper, or Scissors):");
        let humanSelection = getHumanChoice(choice);
        if(humanSelection === null){
            console.log("Invalid input!!! Refresh the Page and try again...");
            return;
        }

        const computerSelection = getComputerChoice();
        let winner = playRound(humanSelection, computerSelection);
        if(winner === "Human"){
            console.log("You win this round!");
            humanScore++;
        }
        else if(winner === "Computer"){
            console.log("Computer wins this round!");
            computerScore++;
        }
        else{
            console.log("This round is tie!");
        }
    }
    console.log("\n Final Result: ");
    if(humanScore > computerScore){
        console.log("YOU WIN THE GAME!!!! Congrats");
    }
    else if(humanScore < computerScore){
        console.log("Computer wins this game. Better luck next time!!!");
    }
    else{
        console.log("It's a tie game!!!");
    }
}

playGame();