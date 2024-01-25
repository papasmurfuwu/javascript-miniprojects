// Exercise 10 Fibonacci 
function fibonacci(num){
    let [num1, num2, nextNum] = [1, 1];
    let numArray = [1, 1];
    for (i=2; i < num; i++){
        nextNum = num1 + num2; 
        num1 = num2;
        num2 = nextNum;
        numArray.push(nextNum);
    }
    return numArray;
}

console.log(fibonacci(100));


// Exercise 11 
const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]
  const getTitles = function(books){
    return books.map(book => book.title)
  }

//   function getTitles(books){
//     return books.map(book => book.title)
//   }

  console.log(getTitles(books));