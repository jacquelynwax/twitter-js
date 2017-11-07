const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetbank');

router.use(express.static('public'))

router.get('/', function(req, res) {
  let tweets = tweetBank.list();
  res.render('index', {tweets: tweets});
})

// router.get('/stylesheets/style.css', function(req, res){
//   let options = {
//     root: __dirname + '/../public/'
//   }
//   res.sendFile('/stylesheets/style.css',options);
// })

module.exports = router;
