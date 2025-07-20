let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let ch = Math.floor(Math.random() * 3);
    if(ch == 0) return "rock";
    else if(ch == 1) return "paper";
    else return "scissors";
}

const buttons = document.querySelectorAll('#player_choice button');
buttons.forEach (button => {
    button.addEventListener('click', (event) => {
        let playerChoice = event.target.id;
        const computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
    });
});

function disablebtn(){
    buttons.forEach(button => {
        button.disabled = true;
    })
}
function playRound(playerChoice, computerChoice){
    const resultContainer = document.querySelector('#result-container');

    resultContainer.innerHTML = '';

    const result = document.createElement('p');
    result.classList.add('result');
    
    if(playerChoice == computerChoice ){
        result.innerHTML = `Tie!!! You both chose ${playerChoice} <br><br>` + `You: ${playerScore}   Computer: ${computerScore}`
    }
    else if((playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") || 
        (playerChoice === "scissors" && computerChoice === "paper")){
        playerScore += 1;
        result.innerHTML = `You Won this round!!! Computer chose ${computerChoice}<br><br>` + `You: ${playerScore}   Computer: ${computerScore}`
        if(playerScore == 5){
            result.innerHTML += '<br><br><strong>You Won!!!</strong>';
            disablebtn();
        }
    }
    else {
        computerScore += 1;
        result.innerHTML = `You lose! Computer chose ${computerChoice} <br><br>` + `You: ${playerScore}   Computer: ${computerScore}`
        if(computerScore == 5){
            result.innerHTML += '<br><br><strong>You lose! Computer Won!!!</strong>';
            disablebtn();
        }
    }
    resultContainer.appendChild(result);

    if(playerScore == 5 || computerScore == 5){
        const playAgain = document.createElement('button');
        playAgain.id = 'play-again';
        playAgain.textContent = 'Play Again';

        playAgain.addEventListener("click", ()=>{
            playerScore = 0;
            computerScore = 0;

            buttons.forEach(button => {
                button.disabled = false;
            })
            resultContainer.innerHTML = '';

        })
        resultContainer.appendChild(playAgain);
    }
}