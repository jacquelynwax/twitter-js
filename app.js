const express = require("express");
const app = express();

app.get('/', function(req, res, next){
    res.send('<h1>Welcome to Twitter-ish</h1>')
})

app.get('/news', function(req, res, next){
    res.send('<h1>Welcome to the news section of Twitter-ish</h1>')
})

app.use(function(req, res, next) {
  console.log(req.method + ' ' + req.path + ' ' + res.status());
  next();
})

app.listen(3000, function(){
    console.log('server listening');
})
