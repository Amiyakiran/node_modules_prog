
const http = require('http')

http.createServer((req,res)=>{
    res.write('hello world')
    res.end()// to end the response
}).listen(4000)
