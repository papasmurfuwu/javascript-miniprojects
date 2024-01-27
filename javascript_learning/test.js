// const ask = (question, yes, no) => confirm(question) ? yes(): no();

// function ask(question, yes, no){
//     (confirm(question)) ? yes(): no();
// }

// ask('Do you agree?', )

//suppose you’re a new programmer and you’re asked to write a program that reads ten numbers and figures out which number is the third highest.

let arr = [1, 3, 5, 7, 11, 17, -5];

function nlargestNum(arr, nlargest){
    // let copyArray = [...arr];
    let largestHolder = [];
    for (n=0;n<nlargest;n++){
        let largestNum = Math.max(...arr);
        arr = arr.filter(num => num !== largestNum);
        largestHolder.unshift(largestNum);
    }
    return largestHolder[0];
}

console.log(arr.sort((a, b) => a - b));
console.log(nlargestNum(arr, 6));