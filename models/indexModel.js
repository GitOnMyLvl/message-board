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

function addMessage(text, user) {
  const message = {
    text: text,
    user: user,
    added: new Date()
  };
  messages.push(message);
}

module.exports = { messages, addMessage };