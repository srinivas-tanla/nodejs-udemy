// modules
// os
// path
// http
// events
// fs - filesystem
const path = require('path');
const os = require('os');
const fs = require('fs');


// variables added in modules are not added to global object
const msg = "hello";
console.log(msg);
console.log(global.msg); // undefined

// path module
console.log(path.parse(__filename));

// os module
console.log(os.cpus());
const totMem = os.totalmem()/(1024*1024*1024);
const freeMem = os.freemem()/(1024*1024*1024);
console.log(`${freeMem} out ${totMem} is free`);

// fs module
fs.readFile('server.js','utf-8',(err,data)=>{
    console.log(data);
});



