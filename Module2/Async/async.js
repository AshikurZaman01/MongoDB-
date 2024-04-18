
const fs = require('fs');
const path = require('path');

const readFilePath = path.join(__dirname, 'hello.txt');
const writeFilePath = path.join(__dirname, 'write.txt');

fs.readFile(readFilePath, 'utf-8', (err, data) => {
    if (err) {
        throw new Error('no found');
    }

    fs.writeFile(writeFilePath, data, (err) => {
        if (err) {
            throw new Error('no found');
        }
    })
})