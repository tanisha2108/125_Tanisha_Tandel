// index.js

const fs = require('fs');
const archiver = require('archiver');
const path = require('path');

const folderPath = path.join(__dirname, 'myFolder');
const outputZip = path.join(__dirname, 'myFolder.zip');

const output = fs.createWriteStream(outputZip);
const archive = archiver('zip', {
  zlib: { level: 9 } 
});

output.on('close', () => {
  console.log(` Zip file created: ${outputZip} (${archive.pointer()} total bytes)`);
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);

archive.directory(folderPath, false);

archive.finalize();
