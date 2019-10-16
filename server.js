function randomQuote(){
    let quotes = ["quote 1", "quote 2", "quote 3", "quote 4", "quote 5", 
    "quote 6", "quote 7", "quote 8", "quote 9", "quote 10"]
    return quotes[(Math.random()*9).toFixed(0)]
}

const http = require('http');

const port = 3000

const server = http.createServer((req,res) => {
    req.statusCode=200;
    if(req.method === 'POST')
        req.statusCode=200
    else
        req.statusCode=404

    req.on('data', ()=>{res.end(randomQuote())})

    res.setHeader('Content-Type', 'text/plain'); 
    res.write('Test!\n'); //https://nodejs.org/api/http.html#http_response_end_data_encoding_callback
})

server.listen(port);