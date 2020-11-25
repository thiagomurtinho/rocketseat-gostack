const express = require('express');

const app = express();

app.get('/projects', (req, res) => {
  return res.json(['project 1', 'project 2']);
});

app.post('/projects', (req, res) => {
  return res.json(['project 1', 'project 2', 'project 3']);
});

app.put('/projects/:id', (req, res) => {
  return res.json(['project 4', 'project 2', 'project 3']);
});

app.delete('/projects/:id', (req, res) => {
  return res.json(['project 2', 'project 3']);
});

app.listen(3333, () => console.log('>>> Back-end started!'));
