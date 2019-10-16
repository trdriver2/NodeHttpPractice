const http = require('http')

const test = 'Give me them crazy eyes'

const options = {
  port: 3000,
  method: 'POST',
  headers: {'Content-Type': 'text/plain'}
}

const req = http.request(options, res => { //https://nodejs.org/api/http.html#http_http_request_options_callback
  console.log(`statusCode: ` + res.statusCode)
  res.on('data', (chunk)=>{console.log(chunk.toString())})
})


req.write(test)
req.end()