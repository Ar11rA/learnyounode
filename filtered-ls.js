var filesPath = process.argv[2];
var fileType = process.argv[3];
var fs = require('fs');
var path = require('path');
if (filesPath === undefined) {
  console.log('Please enter a valid path.');
  return;
}
if (fileType === undefined) {
  console.log('Please enter a valid file type.');
  return;
}
fs.readdir(filesPath, function (err, fileNamesList) {
  if (err) {
    console.log(err);
    return;
  }
  var filteredFiles = fileNamesList.filter(function isProperType(fileName) {
    return path.extname(fileName) === ('.' + fileType);
  });
  if (filteredFiles.length > 0)
    filteredFiles.forEach((element) => {
      console.log(element);
    });
  else
    console.log('No Files Found.')
});

