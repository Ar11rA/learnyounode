var filePath = process.argv[2];
var fs = require('fs');
var bufferObject = fs.readFileSync(filePath);
var fileContents = bufferObject.toString();
var countLines = fileContents.split('\n').length - 1;
console.log(countLines);