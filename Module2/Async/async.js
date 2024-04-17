
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'hello.txt');

// Synchronous read

const file = fs.readFile(filePath, 'utf-8', (err, datt) => {
    if (err) {
        throw new Error('File not found');
    }
    console.log(datt);

})

