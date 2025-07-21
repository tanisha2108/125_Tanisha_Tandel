// index.js

// const fetch = require('node-fetch');  // Import node-fetch
import fetch from "node-fetch";
// Async function to fetch Google homepage
async function fetchGooglePage() {
  try {
    const response = await fetch('https://www.google.com');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const html = await response.text();
    console.log(" Fetched Google homepage successfully.");
    console.log(html.slice(0, 500));  // Print first 500 characters
  } catch (error) {
    console.error(' Error fetching Google page:', error.message);
  }
}

fetchGooglePage();
