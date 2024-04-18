

const fs = require('fs');
const path = require('path');

const readpath = path.join(__dirname, 'hello.txt');
const writepath = path.join(__dirname, 'write.txt');


const readableStream = fs.createReadStream(readpath, 'utf-8');

readableStream.on('data', (data) => {
    console.log(data);

    const writeStream = fs.createWriteStream(writepath);

    writeStream.write(data, (err) => {
        if (err) {
            console.log(err);
        }
    })
})