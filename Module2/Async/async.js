
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'hello.txt');

console.log('Before');

const file = fs.readFile(filePath, 'utf-8', (err, data) => {

    if (err) {
        throw new Error('File not found');
    }
    console.log(data);

})

console.log('After');