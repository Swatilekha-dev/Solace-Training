///`async/await`

async function fibonacciAsync(n) {
  if (n <= 1) {
    return n;
  }
  const prev1 = await fibonacciAsync(n - 1);
  const prev2 = await fibonacciAsync(n - 2);
  return prev1 + prev2;
}

fibonacciAsync(10)
  .then((result) => {
    console.log(`Fibonacci of 10 is ${result}`);
  });

