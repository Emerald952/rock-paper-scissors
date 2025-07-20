let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let ch = Math.floor(Math.random() * 3);
    if(ch == 0) return "rock";
    else if(ch == 1) return "paper";
    else return "scissors";
}

const buttons = document.querySelectorAll('#human_choice button');
buttons.forEach (button => {
    button.addEventListener('click', (event) => {
        let humanChoice = event.target.id;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
});

function disablebtn(){
    buttons.forEach(button => {
        button.disabled = true;
    })
}
function playRound(humanChoice, computerChoice){
    const resultContainer = document.querySelector('#result-container');

    resultContainer.innerHTML = '';

    const result = document.createElement('p');
    result.classList.add('result');
    
    if(humanChoice == computerChoice ){
        result.innerHTML = `Tie!!! You both chose ${humanChoice} <br><br>` + `You: ${humanScore}   Computer: ${computerScore}`
    }
    else if((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper")){
        humanScore += 1;
        result.innerHTML = `You Won this round!!! Computer chose ${computerChoice}<br><br>` + `You: ${humanScore}   Computer: ${computerScore}`
        if(humanScore == 5){
            result.innerHTML += '<br><br><strong>You Won!!!</strong>';
            disablebtn();
        }
    }
    else {
        computerScore += 1;
        result.innerHTML = `You lose! Computer chose ${computerChoice} <br><br>` + `Human: ${humanScore}   Computer: ${computerScore}`
        if(computerScore == 5){
            result.innerHTML += '<br><br><strong>You lose!!! Computer Won</strong>';
            disablebtn();
        }
    }
    resultContainer.appendChild(result);

    if(humanScore == 5 || computerScore == 5){
        const playAgain = document.createElement('button');
        playAgain.textContent = 'Play Again';

        playAgain.addEventListener("click", ()=>{
            humanScore = 0;
            computerScore = 0;

            buttons.forEach(button => {
                button.disabled = false;
            })
            resultContainer.innerHTML = '';

        })
        resultContainer.appendChild(playAgain);
    }
}