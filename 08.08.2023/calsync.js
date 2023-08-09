const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function add(a, b) {
  return a + b;
}

async function subtract(a, b) {
  return a - b;
}

async function multiply(a, b) {
  return a * b;
}

async function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return a / b;
}

async function calculatePercentage(value, percentage) {
  return (value * percentage) / 100;
}

async function getInput(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, (input) => {
      resolve(parseFloat(input));
    });
  });
}

async function main() {
  console.log('Welcome to the Async Calculator!');

  const num1 = await getInput('Enter the first number: ');
  const num2 = await getInput('Enter the second number: ');

  console.log(`\n1. Add\n2. Subtract\n3. Multiply\n4. Divide\n5. Calculate Percentage`);
  const choice = await getInput('Enter your choice (1-5): ');

  let result;

  switch (choice) {
    case 1:
      result = await add(num1, num2);
      break;
    case 2:
      result = await subtract(num1, num2);
      break;
    case 3:
      result = await multiply(num1, num2);
      break;
    case 4:
      result = await divide(num1, num2);
      break;
    case 5:
      const percentage = await getInput('Enter the percentage: ');
      result = await calculatePercentage(num1, percentage);
      break;
    default:
      console.log('Invalid choice.');
      rl.close();
      return;
  }

  console.log(`Result: ${result}`);
  rl.close();
}

main();
