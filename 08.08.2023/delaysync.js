///using setTimeout

function syncDelay(ms) {
  const start = new Date().getTime();
  while (new Date().getTime() - start < ms) {}
  console.log(`Sync delay complete after ${ms}ms`);
}

syncDelay(2000);
