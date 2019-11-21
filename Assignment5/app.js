const express = require('express');
const bodyParser = require('body-parser');
const server = express();


const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({extended: false})



server.post('/submit', urlencodedParser, function (req, res) {
    console.log("HERE");
    console.log(req.body);
    let str = `Name: ${req.body.name}<br>Email: ${req.body.email}<br>comment: ${req.body.comment}`;
    res.status(200).send(str);
});

server.get('/', function(req, res) {
    res.sendFile( __dirname + "/index.html");
})

server.post('/form', (req, res) => {
    console.log(req.param);
})

server.listen(8080);