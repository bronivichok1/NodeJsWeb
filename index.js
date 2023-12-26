const http=require('http')
const fs= require('fs')
let server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type': 'text/html; charset=utf-8'})

    if(req.url=='/')
        fs.createReadStream('./pages/index.html').pipe(res)
    else if(req.url=='/index2')
        fs.createReadStream('./pages/index2.html').pipe(res)
    else
        fs.createReadStream('./pages/error.html').pipe(res)

})

const PORT=3000
const HOST='localhost'

server.listen(PORT,HOST,()=>{
    console.log(`server job:http://${HOST}:${PORT}`)
})