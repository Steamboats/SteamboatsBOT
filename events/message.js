module.exports = (client, message) => {
  // ignore all bots
  if (message.author.bot) return;
  
  // ignore all messages without valid prefix defined in config.json
  if (message.content.indexOf(client.config.prefix) !== 0) return;

  // Get command with arguments, e.g. !myCommand arg1 arg2 arg3 -> [arg1, arg2, arg3]
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Get command data from client.commands Enmap
  const cmd = client.commands.get(command);

  // If command doesn't exist, do nothing
  if (!cmd) return;

  // Else run command
  cmd.run(client, message, args);

};
