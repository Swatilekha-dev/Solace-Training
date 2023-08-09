function fibonacciSync(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacciSync(n - 1) + fibonacciSync(n - 2);
}

const result = fibonacciSync(10);
console.log(`Fibonacci of 10 is ${result}`);


