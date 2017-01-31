var argumentsArray = process.argv;
var numberArray = argumentsArray.slice(2);
var isValid = true;
var errorIndices = [];
numberArray.forEach((element, index) => {
  if (isNaN(element)) {
    isValid = false;
    errorIndices.push(index + 1);

  }
});
if (isValid) {
  var sumOfNumbers = numberArray.reduce((sum, curr) => {
    return sum + parseInt(curr);
  }, 0);
  console.log(sumOfNumbers);
}
else {
  console.log(`The following elements are not numbers : ${errorIndices}`);
  errorIndices.forEach((element) => {
    console.log(`The element entered at ${element} is of type ${typeof (numberArray[element - 1])}`);
  });
}
