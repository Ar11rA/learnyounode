var argumentsArray = process.argv;
numberArray = argumentsArray.slice(2);
var sumOfNumbers = numberArray.reduce((sum, curr) =>
  {return sum + parseInt(curr);
}, 0);
console.log(sumOfNumbers);