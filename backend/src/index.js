const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.json({ msg: 'Hello GoStack!' });
});

app.listen(3333);
