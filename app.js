const express = require("express");
const app = express();

app.get('/', function(req, res, next){
    res.send('<h1>Welcome to Twitter-ish</h1>')
})




app.listen(3000, function(){
    console.log('server listening');
})

