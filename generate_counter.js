const fs = require('fs');

const counterFilePath = 'counter.txt';

// Read current counter value or default to 0
let currentCounter = 0;
if (fs.existsSync(counterFilePath)) {
  currentCounter = parseInt(fs.readFileSync(counterFilePath, 'utf-8').trim()) || 0;
}

// Increment the counter
const newCounter = currentCounter + 1;

// Write the new counter value to the file
fs.writeFileSync(counterFilePath, newCounter.toString());

console.log(`Counter incremented to: ${newCounter}`);
