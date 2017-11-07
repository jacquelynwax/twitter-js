const express = require("express");
const nunjucks = require('nunjucks');
const app = express();

app.engine('html', nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});)
app.set()

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

[1, 2, 3].forEach(console.log(element);)

nunjucks.configure('views', {noCache: true});

app.use(function(req, res, next) {
    console.log(req.method + ' ' + req.path);
    next();
  })

app.get('/', function(req, res, next){
    res.send('<h1>Welcome to Twitter-ish</h1>')
})

app.get('/news', function(req, res, next){
    res.send('<h1>Welcome to the news section of Twitter-ish</h1>')
})

app.listen(3000, function(){
    console.log('server listening');
})













//
