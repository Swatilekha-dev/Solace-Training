// Importing required modules
const express = require('express');
const bodyParser = require('body-parser');

// Creating an Express application
const app = express();
const port = 3000;

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Calculator endpoints
app.post('/add', (req, res) => {
  const { num1, num2 } = req.body;
  if (!num1 || !num2) {
    res.status(400).json({ error: 'Please provide both numbers' });
  } else {
    const result = parseFloat(num1) + parseFloat(num2);
    res.json({ result });
  }
});

app.post('/subtract', (req, res) => {
  const { num1, num2 } = req.body;
  if (!num1 || !num2) {
    res.status(400).json({ error: 'Please provide both numbers' });
  } else {
    const result = parseFloat(num1) - parseFloat(num2);
    res.json({ result });
  }
});

app.post('/multiply', (req, res) => {
  const { num1, num2 } = req.body;
  if (!num1 || !num2) {
    res.status(400).json({ error: 'Please provide both numbers' });
  } else {
    const result = parseFloat(num1) * parseFloat(num2);
    res.json({ result });
  }
});

app.post('/divide', (req, res) => {
  const { num1, num2 } = req.body;
  if (!num1 || !num2) {
    res.status(400).json({ error: 'Please provide both numbers' });
  } else {
    const divisor = parseFloat(num2);
    if (divisor === 0) {
      res.status(400).json({ error: 'Division by zero is not allowed' });
    } else {
      const result = parseFloat(num1) / divisor;
      res.json({ result });
    }
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Dummy Calculator app listening at http://localhost:${port}`);
});
