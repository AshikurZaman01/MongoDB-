
const fs = require('fs');

const path = require('path');

const filePath = path.join(__dirname, 'hello.txt');

const file = fs.readFileSync(filePath, 'utf-8');

console.log(file);