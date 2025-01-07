// const http = require('http'); //cjs
import http from 'http';  //es6
import fs from 'fs'; //import file system module
import { configDotenv } from 'dotenv';

configDotenv();

const PORT = process.env.PORT || 3000;
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'text/html');
    // res.statusCode =200; //ok
    // res.write('<h1>Hello World</h1>');

    if(req.url == '/homepage'){
        res.statusCode = 200;
        const data = fs.readFileSync('./index.html')
        res.end(data);
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        const data = fs.readFileSync('./about.html')
        res.end(data);
    }
    else if(req.url == '/admission'){
        res.statusCode = 200;
        const data = fs.readFileSync('./admission.html')
        res.end(data);
    }
    else if(req.url == '/courses'){
        res.statusCode = 200;
        const data = fs.readFileSync('./courses.html')
        res.end(data);
    }
    else if(req.url == '/contact'){
        res.statusCode = 200;
        const data = fs.readFileSync('./contact.html')
        res.end(data);
    }
    else{
        res.statusCode = 404;
        res.end('<h1>Page Not Found at this Url</h1>');
    }
    
})
server.listen(PORT,()=>{
    console.log(`server is runnig on port : ${PORT}`);
})

//import 
// const greet = require('./first.js');
// import {greet, company} from './first.js';
// greet();
// console.log(company);
// console.log(company.name);
// console.log(company.address);