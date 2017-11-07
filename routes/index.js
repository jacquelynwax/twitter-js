const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetbank');

router.use(express.static('public'))

router.get('/', function(req, res) {
  let tweets = tweetBank.list();
  res.render('index', {tweets: tweets});
})

router.get('/users/:name', function(req, res) {
  var name = req.params.name; //localHost3000/users/jacquelyn --> name = jacquelyn
  var list = tweetBank.find( {name: name} ); // list = [jacquelyn tweets] (data)
  res.render( 'index', { tweets: list } );  
  //using index template inject into the tweets this objejct we just foind 'list'
});


module.exports = router;
