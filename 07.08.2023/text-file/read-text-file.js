//Read a text file + HTML file + JSON file using async method in NodeJS [in 3 different programs]

const fs = require('fs');

async function readTextFile() {
  try {
    const content = await fs.promises.readFile('textfile.txt', 'utf-8');
    console.log(content);
  } catch (error) {
    console.error('Error reading text file:', error);
  }
}

readTextFile();

