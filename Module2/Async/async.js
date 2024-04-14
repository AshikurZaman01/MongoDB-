
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'hello.txt');

fs.readFile(filePath, 'utf-8', (err, data) => {

    if (err) {
        throw new Error(err);
    }
    console.log(data);
    console.log(data);

})