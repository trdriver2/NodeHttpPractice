const http = require('http');

const port = 3000

const server = http.createServer((req,res) => {
    req.statusCode=200;
    if(req.method === 'POST')
        req.statusCode=200
    else
        req.statusCode=404

    req.on('data', (chunk)=>{res.end(chunk)})

    res.setHeader('Content-Type', 'text/plain'); 
    res.write('Test!\n'); //https://nodejs.org/api/http.html#http_response_end_data_encoding_callback
})

server.listen(port);