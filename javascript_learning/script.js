// 1. Validate Email Address
let userEmail = prompt("Please enter your full email address.");
let regexEmail = /\w+\@connect\.ust\.hk/;
(regexEmail.test(userEmail)) ? alert("Valid email~"): alert("Invalid format!");


// 2. Extract dates 
MM-DD-YYYY | MM/DD/YYYY,  1900 - 2099
let dateString = "";
let regexDate = /\b(0?[1-9]|1[0-2])[-\/](0?[1-9]|[12][0-9]|3[01])[-\/](19|20)\d{2}/g;
console.log(regexDate.test(dateString));


// 3. Replace Phone Numbers (NA)
function replaceNA(str, replacement){
    let regexPhone = /(\([0-9]{3}\) \d{3}\-\d{4}|\d{3}\-\d{3}\-\d{4})/g;
    return str.replace(regexPhone, replacement)
}
let str = "My number is (123) 456-7890 and your number is 123-456-7890.";
let replacement = "***REMOVED***";
console.log(replaceNA(str, replacement));


// 4. Password Strength Check
// let passwordStr = "Password1!";
// function checkStrength(str){
//     // (?=^^^) --> select
//     let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])(?=.{8,})/;
//     return (regex.test(str)) ? "Strong Password!": "Weak Password!!";
// }
// console.log(checkStrength("1A2dasd!"));

// Code below is a more detailed password strength check
function checkStrength(str){
    let checks = {
        lower: {regex: /[a-z]/, warning: "- Missing lowercase (a-z)\n"},
        upper: {regex: /[A-Z]/, warning: "- Missing uppercase (A-Z)\n"},
        digit: {regex: /[0-9]/, warning: "- Missing digit (0-9)\n"},
        symbol: {regex: /[!@#$%^&*()]/, warning: "- Missing symbol (!@#$%^&*())\n"},
        length: {regex: /.{8,}/, warning: "- Password must be at least 8 characters long\n"}           
    }
// loop through regex test, then add respective warning to [] 
    let warning = [];
    for (parameter in checks){
        if (!checks[parameter].regex.test(str)){
        warning.push(checks[parameter].warning)
        }
    }
// concatenating console output 
    return (warning.length === 0) ? 
    "Input Password: " + str + "\n" + 
    "Password Strength: Strong" + "\n\n":
    (warning.length == 3 || warning.length == 4 || warning.length == 5) ?
    "Input Password: " + str + "\n" + 
    "Password Strength: Weak" + "\n\n" +
    "Password weaknesses:\n" + warning.join(''): 
    "Input Password: " + str + "\n" + 
    "Password Strength: Moderate" + "\n\n" +
    "Password weaknesses:\n" + warning.join('');
}

let passwordStr = prompt("Enter a password: ");
console.log(checkStrength(passwordStr));