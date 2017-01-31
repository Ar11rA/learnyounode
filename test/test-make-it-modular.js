var assert = require('chai').assert;
var filterLs = require('../filtered-ls-module');
describe('when valid file path and type is provided as argument', function () {
  it('should list out all files in the given directory', function (done) {
    var validDirectory = '/Users/aritraaritra/Documents/learnyounode';
    var validFileType = 'js'
    var arrayOfFiles = ['asynchronous-file-read.js',
      'baby-steps.js',
      'filtered-ls-module.js',
      'filtered-ls.js',
      'hello-world.js',
      'make-it-modular.js',
      'synchronous-file-read.js'];
    var resultArray = [];
    var isEqual;
    filterLs(validDirectory, validFileType, (error, resultArray) => {
      if (error) {
        console.log(error);
      }
      assert.deepEqual(arrayOfFiles, resultArray);
      done();
    });

  });
  it('should return empty if no files of given type are there in the given directory which has some files of other types', function (done) {
    var validDirectory = '/Users/aritraaritra/Documents/learnyounode';
    var validFileType = 'exe'
    var arrayOfFiles = [];
    filterLs(validDirectory, validFileType, (error, resultArray) => {
      if (error) {
        console.log(error);
      }
      assert.deepEqual(arrayOfFiles, resultArray);
      done();
    });
  });
  it('should return empty if the given directory is empty', function (done) {
    var validDirectory = '/Users/aritraaritra/Documents/learnyounode/empty-directory';
    var validFileType = 'txt'
    var arrayOfFiles = [];
    filterLs(validDirectory, validFileType, (error, resultArray) => {
      if (error) {
        console.log(error);
      }
      assert.deepEqual(arrayOfFiles, resultArray);
      done();
    });
  });
});

describe('when invalid file path or file type and type is provided as argument', function () {
  it('should return an error message with proper details', function (done) {
    var invalidDirectory = '/Users/aritraaritra/Documents/learnyounode/asdsa';
    var fileType = 'filetype';
    var errorMessage = `ENOENT`;
    filterLs(invalidDirectory, fileType, (error, resultArray) => {
      if (error) {
        assert.deepEqual(errorMessage, error.code);
      }
      done();
    });
  });

  it('should return an error message when the file path is undefined', function (done) {
    var undefinedDirectory = undefined;
    var fileType = undefined;
    var errorMessage = 'Please enter a valid path.';
    filterLs(undefinedDirectory, fileType, (error, resultArray) => {
      if (error) {
        assert.deepEqual(errorMessage, error);
      }
      done();
    });
  });

  it('should return an error message when the file path is valid and file type is undefined', function (done) {
    var validDirectory = './';
    var fileType = undefined;
    var errorMessage = 'Please enter a valid file type.';
    filterLs(validDirectory, fileType, (error, resultArray) => {
      if (error) {
        assert.deepEqual(errorMessage, error);
      }
      done();
    });
  });
});
