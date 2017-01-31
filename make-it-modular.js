var filteredLs = require('./filtered-ls-module')
var directory = process.argv[2];
var fileType = process.argv[3];
filteredLs(directory, fileType, (error, arrayOfFiles) => {
  if (error) {
    console.log(error);
  }
  else {
    if (arrayOfFiles.length > 0) {
      arrayOfFiles.forEach(function (element) {
        console.log(element);
      });
    }
    else {
      console.log(`No files found of the type ${fileType}`);
    }
  }
});