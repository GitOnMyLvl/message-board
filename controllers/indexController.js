const messages = require('../models/indexModel');

exports.index = (req, res) => {
  res.render('index', { title: 'Welcome to the Message Board', messages })
}