const quotes = [
  "Believe in yourself!",
  "You are stronger than you think.",
  "Don't watch the clock; do what it does. Keep going.",
  "Push yourself, because no one else is going to do it for you.",
  "Success doesn’t just find you. You have to go out and get it."
];

function getQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

// Export the function so others can use it
module.exports = { getQuote };
