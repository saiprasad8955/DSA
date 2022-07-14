let http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Helloooo Bhavana Jiiii!');
    res.end();
    console.log('server is started')
}).listen(8080);