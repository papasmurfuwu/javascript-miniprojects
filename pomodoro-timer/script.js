
let startButton = document.getElementsByClassName('start-button')[0];
let timerRunning = false; // This is a flag variable
let quote = document.getElementById('quote');
let cycleCounter = document.querySelector("#cycle span");
let roundCounter = document.querySelector("#round span");

// quote display 
quote.style.visibility = 'hidden';

startButton.addEventListener('click', function(){
    if (timerRunning){
        console.log("You thought fool")
        return; // If timer is running, don't start 
    }

    // initialize minutes and seconds variables! 
    quote.style.visibility = 'visible';
    const startingMinutes = 25;
    let time = startingMinutes * 60;

    const countdownEl = document.getElementById('countdown');

    // Call the function once to start immediately 
    updateCountdown();

    // Since setInterval() delays by 1s
    intervalid1 = setInterval(updateCountdown, 1000);
    timerRunning = true;

    function updateCountdown(){
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;

        countdownEl.innerHTML = `${minutes}:${seconds}`;
        time--; 
    
        if (time < 0){
            clearInterval(intervalid1);
            timerRunning = false;
        }
    }
})

// swtich state to rest mode when timer ends (automatically add timer for 5 mins)
// if cycle n #4 --> 30 mins rest 

// in code: 1. create new page for rest
//          2. use javascript turn page 

// timer: add roundCount variable for every round 
// cycle: same thing but once every four times 
