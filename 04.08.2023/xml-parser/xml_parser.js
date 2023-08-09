// Importing required modules
const express = require('express');
const fs = require('fs');
const xml2js = require('xml2js');

// Creating an Express application
const app = express();
const port = 3001;

// Read and parse the XML file
fs.readFile('sample.xml', (err, data) => {
  if (err) {
    console.error('Error reading the XML file:', err);
    return;
  }

  xml2js.parseString(data, (err, result) => {
    if (err) {
      console.error('Error parsing the XML:', err);
      return;
    }

    // Endpoint to display the parsed XML response
    app.get('/xml', (req, res) => {
      res.json(result);
    });

    // Start the server
    app.listen(port, () => {
      console.log(`XML Parsing app listening at http://localhost:${port}`);
    });
  });
});

