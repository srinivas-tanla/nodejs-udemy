const http = require('http');

// this server object is an eventEmitter.
const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        res.write('hello');
        res.end();
    }
}); 

server.on('connection',(socket)=>{
    console.log('new connection');
})

server.listen(3000);
console.log('listening to port 3000');