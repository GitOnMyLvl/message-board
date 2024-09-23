const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  },
  {
    text: "Super Project",
    user: "Max",
    added: new Date()
  },
  {
    text: "Eat my shirts",
    user: "Bart",
    added: new Date()
  },
  {
    text: "Gigidi",
    user: "Quagmire",
    added: new Date()
  },
  {
    text: "What the fork",
    user: "Spoon",
    added: new Date()
  }
];

router.get('/', (req, res) => {
  res.render('index', { title: 'Welcome to the Message Board', messages });
});

module.exports = router;
