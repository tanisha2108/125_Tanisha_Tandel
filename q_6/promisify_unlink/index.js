// index.js

const fs = require('fs');
const util = require('util');
const path = require('path');

// Promisify fs.unlink
const unlinkAsync = util.promisify(fs.unlink);

// File to delete
const filePath = path.join(__dirname, 'test.txt');

unlinkAsync(filePath)
  .then(() => {
    console.log(` File deleted: ${filePath}`);
  })
  .catch((err) => {
    console.error(' Error deleting file:', err.message);
  });

  // To test this code, create a file named 'test.txt' in the same directory
  //echo "This is a test file to be deleted" > test.txt