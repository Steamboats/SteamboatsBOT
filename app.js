const Discord = require('discord.js');
const client = new Discord.client();
require('dotenv').config();

client.on('message', (msg) => {
  if (msg.content.startsWith('ping')) {
    msg.channel.send('pong!');
  }
});

client.login(process.env.SECRET_TOKEN);
