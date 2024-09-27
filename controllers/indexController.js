const db = require('../db/queries')

exports.index = async(req, res) => {
  const messages = await db.getAllMessages();
  res.render('index', { title: 'Welcome to the Message Board', messages })
}

exports.openMessage = async(req, res) => {
  const message = await db.getMessage(req.params.id);
  if(message){
    res.render('message', { message });
  }else {
    res.status(404).send('Message not found');
  }
};