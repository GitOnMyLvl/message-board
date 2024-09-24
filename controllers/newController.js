const { addMessage } = require('../models/indexModel')

exports.form = (req, res) => {
  res.render('form');
}

exports.postMessage = (req, res) => {
  console.log(req.body);
  const { text, user } = req.body;
  addMessage(text, user);
  res.redirect('/');
}