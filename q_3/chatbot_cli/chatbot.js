// chatbot.js

function getResponse(message) {
  const msg = message.toLowerCase();

  if (msg.includes("weather")) {
    return "Today's weather is sunny and pleasant ";
  } else if (msg.includes("sunny")) {
    return "Yes, it's sunny today ";
  } else if (msg.includes("rain") || msg.includes("rainy")) {
    return "No rain expected today ";
  } else if (msg.includes("bye") || msg.includes("exit")) {
    return "exit"; // used to exit the app
  } else {
    return "Sorry, I can only talk about the weather! Try asking about sun or rain.";
  }
}

module.exports = { getResponse };
