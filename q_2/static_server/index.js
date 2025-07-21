// index.js

const express = require('express');
const app = express();
const PORT = 3001;

// Serve static files from "public" folder
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Static server running at http://localhost:${PORT}`);
});
