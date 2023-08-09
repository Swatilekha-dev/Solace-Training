///async/await
const numbers = [1, 2, 4, 5, 10];

async function sumAsyncArray(numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
}

sumAsyncArray(numbers)
  .then((sum) => {
    console.log(`Sum of numbers: ${sum}`);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

