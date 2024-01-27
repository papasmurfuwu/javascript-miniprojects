// Return n largest num in list 
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

console.log(arr.sort((a, b) => b - a));
console.log(nlargestNum(arr, 6));


// .filter() 1. Take an array of numbers and return back with only even number
 let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 let evenArr = numArr.filter(arr => arr % 2 == 0).map(element => parseFloat(Math.sqrt(element).toFixed(2)));
 console.log(evenArr);


 // .map() 2. Function that takes array as input and return one where each element is squared
let squaredArr = numArr.map(element => element ** 2);
console.log(squaredArr);


// sort() 3. 
let words1 = ["Elephant", "Dog", "Cat", "Horse", "Ant"];
let sortedArr = words1.sort();
console.log(sortedArr);


// .reduce() 4. take array of numbers and return sum of all elements 
console.log(numArr.reduce((a, b) => (a + b), 0))


// 6. Sort an array of names (reversed) and return new array with position prefixed 
let names = ["Phil", "Cole", "Sarah", "Ellery", "Parker"];
let reversedNames = [...names];
let reverseSortNames = reversedNames.sort(
    (name1, name2) => name2.localeCompare(name1)).map(
    (name, index) => `${index + 1}. ${name}`
    );

console.log(reverseSortNames);


// 7. Take an array of numbers as input and return the product of the odd numbers only.
let oddProducts = numArr.filter(num => num % 2 !== 0).reduce((a, b) => a * b, 1);
console.log(oddProducts);


// 8. Input array of string, return only those starting with vowels 
let words2 = ["Apple", "Elephant", "Ice", "Owl", "Umbrella", "Tree", "Flower", "Car", "Book", "Pen"];
let vowels =  ['a', 'e', 'i', 'o', 'u'];
let vowelWords = words2.filter(word => vowels.includes(word[0].toLowerCase()));
console.log(vowelWords);


// 10. Input array, return squared sum of only odd numbers
let oddNum = numArr.filter(num => num % 2 !== 0).map(num => num ** 2).reduce((a, b) => a + b);
console.log(oddNum);