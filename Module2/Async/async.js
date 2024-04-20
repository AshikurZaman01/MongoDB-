
const http = require('node:http');

const server = http.createServer((req, res) => {

    res.end('Hello form server');


})

server.listen(3000, () => {
    console.log('Server is running at port 3000');
})