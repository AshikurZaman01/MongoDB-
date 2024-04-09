
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'hello.txt');

fs.writeFileSync(filePath, 'Hello, Node.js');

const fileContent = fs.readFileSync(filePath, 'utf-8');

console.log(fileContent);