//Read a text file + HTML file + JSON file using async method in NodeJS [in 3 different programs]

const fs = require('fs');

async function readJsonFile() {
  try {
    const jsonData = await fs.promises.readFile('data.json', 'utf-8');
    const parsedData = JSON.parse(jsonData);
    console.log(parsedData);
  } catch (error) {
    console.error('Error reading JSON file:', error);
  }
}

readJsonFile();
