// 1. bind each button to corresponding function
// 2. store input into string 
// 3. function() turn string into integer => return product! 

let numDisplay = document.getElementById('display');


function appendToDisplay(str){
    display.value += str;
} 

function clearDisplay(){
    display.value = '';
}

function calculate(){
    let result = eval(display.value);
    display.value = Number(result.toFixed(6));
}