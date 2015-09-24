var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('<html><body>foo2 - Hello World !</body></html>');
});

app.listen(80);
