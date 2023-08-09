function factorialAsync(n) {
  return new Promise((resolve, reject) => {
    if (n === 0 || n === 1) {
      resolve(1);
    } else {
      factorialAsync(n - 1)
        .then((result) => resolve(n * result))
        .catch(reject);
    }
  });
}

factorialAsync(6)
  .then((result) => {
    console.log(`Factorial of 6 is ${result}`);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
