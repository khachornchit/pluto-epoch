var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('plutoepoch', ['plutoepoch']);
var serverPort = 9002;

app.use(express.static(__dirname + "/pluto-solutions-epoch"));

app.listen(serverPort);
console.log("Pluto solutions server running on port : " + serverPort);