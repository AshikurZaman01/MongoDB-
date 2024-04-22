
const http = require('http');
const url = require('url');
const url = require('url');
const url = require('url');

const data = [
    { id: 1, name: 'Anis', age: 50 },
    { id: 2, name: 'Rahim', age: 50 },
    { id: 3, name: 'Karim', age: 50 },
    { id: 4, name: 'Jahid', age: 50 },
    { id: 5, name: 'Raju', age: 50 },
]


const server = http.createServer((req, res) => {

    if (req.url === '/home') {

        res.end('Hello from home');
    } else if (req.url === '/about') {
        res.writeHead(200, {
            'Content-type': 'application/json',
            'email': 'abc@gmail.com'
        })
        res.end(JSON.stringify(data));
    } else {
        res.end('unknown url');
    }

})

server.listen(3000, () => {
    console.log('server is running on port 3000');
})