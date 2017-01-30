var filePath = process.argv[2];
var fs = require('fs');
fs.readFile(filePath, 'utf8', (err, data) => { console.log(data.toString().split('\n').length - 1) });;