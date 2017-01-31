var fileSystem = require('fs');
var path = require('path');
function asyncFilterLs(inputPath, fileType, callback) {
  var result = [];
  if (inputPath === undefined) {
    callback('Please enter a valid path.');
    return;
  }
  if (fileType === undefined) {
    callback('Please enter a valid file type.');
    return;
  }
  fileSystem.readdir(inputPath, function (error, fileNameStringsArray) {
    if (error) {
      return callback(error);
    }
    fileNameStringsArray.forEach(function (fileName) {
      if (path.extname(fileName) === ('.' + fileType)) {
        result.push(fileName);
      }
    });
    return callback(null, result);
  });
}
module.exports = asyncFilterLs;