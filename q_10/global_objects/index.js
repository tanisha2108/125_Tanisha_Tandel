// index.js

// __dirname - Global variable to get current directory
console.log("Current Directory (__dirname):", __dirname);

// __filename - Global variable to get current file path
console.log("Current File (__filename):", __filename);

// setTimeout - Global function to delay execution
setTimeout(() => {
  console.log("This message is shown after 2 seconds (setTimeout)");
}, 2000);

// setInterval - Runs every 2 seconds (we'll stop it after one run)
let count = 0;
const interval = setInterval(() => {
  count++;
  console.log("setInterval running... count:", count);

  if (count >= 1) {
    clearInterval(interval); // Stop after 1 run
  }
}, 2000);

// process - Global object to access environment info
console.log("Platform:", process.platform);
console.log("Node.js Version:", process.version);
console.log("Current Working Directory:", process.cwd());
