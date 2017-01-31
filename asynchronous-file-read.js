var filePath = process.argv[2];
var fs = require('fs');
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err)
    console.log(err);
  console.log(data.toString().split('\n').length - 1)
});
