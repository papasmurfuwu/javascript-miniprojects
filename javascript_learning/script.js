// let userEmail = prompt("Please enter your full email address.");
// let regex = /\w+\@connect\.ust\.hk/;
// (regex.test(userEmail)) ? alert("Valid email~"): alert("Invalid format!");


// MM-DD-YYYY | MM/DD/YYYY,  1900 - 2099
// let str = "";
// let regexDate = /\b(0?[1-9]|1[0-2])[-\/](0?[1-9]|[12][0-9]|3[01])[-\/](19|20)\d{2}/g;
// console.log(regexDate.test(str));


// function replaceNA(str, replacement){
//     let regex = /(\([0-9]{3}\) \d{3}\-\d{4}|\d{3}\-\d{3}\-\d{4})/g;
//     return str.replace(regex, replacement)
// }

// let str = "My number is (123) 456-7890 and your number is 123-456-7890.";
// let replacement = "***REMOVED***";
// console.log(replaceNA(str, replacement));


let passwordStr = "Password1!";
function checkStrength(str){
    // (?=) --> 
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])(?=.{8,})/;
    return (regex.test(str)) ? "Strong Password!": "Weak Password!!";
}
console.log(checkStrength("1A2dasd!"));
