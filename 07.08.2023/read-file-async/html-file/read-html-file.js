//Read a text file + HTML file + JSON file using async method in NodeJS [in 3 different programs]

const fs = require('fs');

async function readHtmlFile() {
  try {
    const html = await fs.promises.readFile('index01.html', 'utf-8');
    console.log(html);
  } catch (error) {
    console.error('Error reading HTML file:', error);
  }
}

readHtmlFile();

