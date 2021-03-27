var express = require('express');
var app = express();

console.log("Hello World");
var indexPage = __dirname + "/views/index.html";

app.get("/",function (req,res){
  res.sendFile(indexPage);
});

 module.exports = app;