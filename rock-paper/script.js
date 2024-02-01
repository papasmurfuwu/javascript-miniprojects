// Simple rock paper scissors game 
// Player plays against computer 
// 1. Computer generate choice
// 2. User input their choice
// 3. Compare choice --> return result, loop the whole thing 


function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors']
    let ranNum = Math.floor(Math.random()*3);
    let computerChoice = choices[ranNum];
    return computerChoice;
}


function playGame(){
    let userInput = prompt("Rock...Paper...Scissors! (Input word)".toLowerCase())
    userInput = userInput.replace(/\s/g, '');
    let computerChoice = getComputerChoice();
    console.log(`Computer choice: ${computerChoice}\n`)
    if (userInput == computerChoice){
        console.log("Draw!");
    } else if (userInput == 'rock' && computerChoice == 'paper'||
               userInput == 'paper' && computerChoice == 'scissors'||    
               userInput == 'scissors' && computerChoice == 'rock'){
        console.log("You lost!")
    } else if (userInput == 'rock' && computerChoice == 'scissors'||
               userInput == 'paper' && computerChoice == 'rock'||     
               userInput == 'scissors' && computerChoice == 'paper'){
        userWins += 1;
        console.log("You won!");
    }
    let playAgain = confirm("Play again?");
    return playAgain;
}

let userWins = 0; 
let roundNum = 1;
while(true){
    console.log(`----------Round ${roundNum}----------`)
    if(!playGame()){
        break;
    }
    roundNum += 1;  
} 
console.log(`You got ${userWins} win(s) out of ${roundNum} games~`)
console.log("Thanks for playing! See you next time!")


