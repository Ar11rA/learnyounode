var filePath = process.argv[2];
var fs = require('fs');
if (fs.existsSync(filePath)) {
  try {
    var bufferObject = fs.readFileSync(filePath);
    var fileContents = bufferObject.toString();
    var countLines = fileContents.split('\n').length - 1;
    console.log(countLines);
  }
  catch (err) {
    if (err.code == 'ENOENT') {
      console.log('The file faced some errors while being read. Please try again.')
    }
  }
}
else {
  console.log('The file does not exist in the following path');
}

