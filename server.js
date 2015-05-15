var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('foo2 - Hello World !');
});

app.listen(80);
