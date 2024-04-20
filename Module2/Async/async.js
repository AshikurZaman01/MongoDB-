
const http = require('node:http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)

    if (req.url === '/home' && req.method === 'GET') {
        res.end('this is home data')
    } else if (req.url === '/post' && req.method === 'GET') {
        res.end('this is post data')
    } else {
        res.end('this is not valid url')
    }
})

server.listen(3000, () => {
    console.log('server is running on port 3000');
})