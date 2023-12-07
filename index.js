// console.log("hello");

// create server

const http=require('http')
const port=3100;
const server=http.createServer((req,res)=>{
 res.statusCode=200;
 res.setHeader('Content-Type','text/html');
 res.end('hello world');
});

server.listen(port,()=>{
    console.log(`sever running at ${port}`)
});

// create file 
const fs=require('fs')
fs.writeFile('file.text','hello,friend',(err)=>{
    if(err) throw err;
    console.log("data written file")
});

//read file
fs.readFile('file.text','utf8',(err,data)=>{
    if (err) throw err;
    console.log(data);
});


//Import module in node.js
const app=require('./app')
app.sayHello();


const https = require('https');
 
const options = {
  hostname: 'yourapp.com',
  port: 443,
  path: '/about',
  method: 'GET'
};
 
const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);
   
  res.on('data', d => {
    process.stdout.write(d);
  });
});
 
req.on('error', error => {
  console.error(error);
});
 
req.end();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const ports = 3000;
app.use(bodyParser.json());
let resources = [];
app.post('/api/resource', (req, res) => {
  const newResource = req.body;
  newResource.id = resources.length + 1;
  resources.push(newResource);
  res.status(201).json({ message: 'Resource created successfully', resource: newResource });
})
app.listen(port, () => {
  console.log(`Server listening on port ${ports}`);
});



