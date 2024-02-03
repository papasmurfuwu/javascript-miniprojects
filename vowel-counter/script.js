// 1. take in user input 
// 2. run through regex 
// return number! 

// declare HTML elements as variables 
let userInput = document.getElementById('user-input');
let checkButton = document.getElementById('check-button');

// create event listener for checking vowel
checkButton.addEventListener('click', function(){
    let str = userInput.value;
    let vowelNum = str.match(/[aeiou]/g).length;
    if (vowelNum == 1){
        alert(`There is 1 vowel in the string!`)
    } else {
        alert(`There are ${vowelNum} vowels in the string!`)
    }
    userInput.value = '';
})




