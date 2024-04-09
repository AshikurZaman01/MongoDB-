const fs = require('fs');
const path = require('path');

// Use path.join to correctly concatenate directory and file name
const filePath = path.join(__dirname, 'hello.txt');

// Read file synchronously
const file = fs.readFileSync(filePath, 'utf-8');

console.log(file)
