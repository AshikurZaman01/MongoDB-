
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'hello.txt');

// Asynchronous
fs.writeFileSync(filePath, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lol , Lol')

const file = fs.readFileSync(filePath, 'utf-8');
console.log(file);