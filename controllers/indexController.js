const { messages }= require('../models/indexModel');

exports.index = (req, res) => {
  res.render('index', { title: 'Welcome to the Message Board', messages })
}

exports.openMessage = (req, res) => {
  const message = messages[req.params.id];
  if(message){
    res.render('message', { message });
  }else {
    res.status(404).send('Message not found');
  }
};