const express = require("express");
const nunjucks = require('nunjucks');
const app = express();

app.engine('html', nunjucks.render);
app.set('view engine', 'html')
nunjucks.configure('views', {noCache: true});

const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.use(function(req, res, next) {
    console.log(req.method + ' ' + req.path + ' '+ res.statusCode);
    next();
  })

app.get('/', function(req, res, next){
    res.render( 'index', {title: 'Hall of Fame', people: people} );
    //res.send('<h1>Welcome to Twitter-ish</h1>')
})

app.get('/news', function(req, res, next){
    res.send('<h1>Welcome to the news section of Twitter-ish</h1>')
})

app.listen(3000, function(){
    console.log('server listening');
})













//
