exports.run = (client, message, args) => {
  message.channel.send(`Jasmin will come to you tonight with`).then(message.channel.send(`:cactus:`)).catch(console.error);
}

