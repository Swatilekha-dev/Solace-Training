function factorialSync(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorialSync(n - 1);
  }
}

const result = factorialSync(5);
console.log(`Factorial of 5 is ${result}`);
