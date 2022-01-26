const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Olá Docker, v3.0.0!');
});

app.listen(3000);
