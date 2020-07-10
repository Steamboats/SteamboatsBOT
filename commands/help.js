exports.run = (client, message, args) => {
  const command_overview = `You can command me to...
  !ping - replies with 'pong show? ;)'
  !angry - replies with 'I also angry!'
  !yell (admin) - ;)
  `
  message.channel.send(command_overview);
}

