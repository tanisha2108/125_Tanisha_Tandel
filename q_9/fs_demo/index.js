// index.js
const fs = require('fs');

// 1. Create and write to a file
fs.writeFileSync('demo.txt', 'This is the first line.\n');
console.log(' File created and written.');

// 2. Append more content
fs.appendFileSync('demo.txt', 'This is the second line.\n');
console.log(' Content appended.');

// 3. Read the file
const data = fs.readFileSync('demo.txt', 'utf8');
console.log(' File content:\n', data);

// 4. Rename the file
fs.renameSync('demo.txt', 'demo-renamed.txt');
console.log(' File renamed to demo-renamed.txt');

// 5. Delete the file
fs.unlinkSync('demo-renamed.txt');
console.log(' File deleted.');
