const mongoose = require('mongoose');

exports.run = (client, message, args) => {
  if (message.author.id !== client.config.ZC_ID && message.author.id !== client.config.DTHX_ID) return;
  message.channel.send(`This is how message author looks like: ${Object.keys(message.author)}`);
  message.channel.send(`This is how message author looks like: ${message.author.username}`);
}

