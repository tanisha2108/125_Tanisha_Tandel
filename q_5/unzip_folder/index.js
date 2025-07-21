// index.js

const fs = require('fs');
const unzipper = require('unzipper');
const path = require('path');

const zipFilePath = path.join(__dirname, 'myFolder.zip');
const extractToPath = path.join(__dirname, 'extracted');

fs.createReadStream(zipFilePath)
  .pipe(unzipper.Extract({ path: extractToPath }))
  .on('close', () => {
    console.log(` Extracted to folder: ${extractToPath}`);
  })
  .on('error', (err) => {
    console.error(' Error extracting zip:', err);
  });
