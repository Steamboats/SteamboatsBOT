exports.run = (client, message, args) => {
  if (message.author.id !== client.config.ZC_ID && message.author.id !== client.config.DTHX_ID) return;
  message.delete();
  message.channel.send(`Your overlords have said:\n${args.join(' ')}`);
}

