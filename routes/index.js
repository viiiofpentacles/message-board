var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hello!',
    user: 'Test User',
    added: new Date()
  },
  {
    text: 'Hi everyone',
    user: 'Sandy',
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'Message Board' });
});

router.post('/new', function(req, res, next) {
  const userMessage = req.body.userMessage;
  const userName = req.body.userName;
  messages.push({text: userMessage, user: userName, added: new Date()});
  res.redirect('/');
});

module.exports = router;
