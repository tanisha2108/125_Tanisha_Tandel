// index.js

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/gethello', (req, res) => {
  res.send('Hello NodeJS!!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
