const db = require('../db/queries')

exports.form = (req, res) => {
  res.render('form');
}

exports.postMessage = async (req, res) => {
  const { text, user } = req.body;
  await db.addMessage(text, user);
  res.redirect('/');
}