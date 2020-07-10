exports.run = (client, message, args) => {
  if (message.author.id !== client.config.ZC_ID && msg.author.id !== DTHX_ID) return;
  message.delete();
  message.channel.send(` Your overlords have said:\n${args.join(' ')}`);
}

