// index.js

const readline = require("readline");
const { getResponse } = require("./chatbot");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "You> "
});

console.log(" Welcome to WeatherBot!");
console.log("Ask me about the weather. Type 'exit' to quit.");

rl.prompt();

rl.on("line", (input) => {
  const reply = getResponse(input);

  if (reply === "exit") {
    console.log("Chatbot> Bye! Stay safe ");
    rl.close();
  } else {
    console.log("Chatbot>", reply);
    rl.prompt();
  }
});
