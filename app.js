
const express = require('express')
const app= express()

app.get('/', function(req, res){

    res.send("hey whas up from express server");
}
);
app.listen(3000);
// const http = require("http");
// //import http = require("http");

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World\n');
// });
// //const sum = (a,b) => {a + b};
// //console.log(sum(10, 20));

// server.listen(3000, () => {
//     console.log('Server running at http://localhost:3000/');
// }); 