exports.run = (client, message, args) => {
  message.channel.send('pong show? ;)').catch(console.error);
}
