///using setTimeout and Promises

function asyncDelay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Async delay complete after ${ms}ms`);
    }, ms);
  });
}

asyncDelay(1000)
  .then((message) => {
    console.log(message);
  });

