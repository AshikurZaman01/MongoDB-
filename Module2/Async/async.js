
const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'hello.txt');

// synchronous read
const file = fs.readFileSync(filepath, 'utf-8');

console.log(file);
