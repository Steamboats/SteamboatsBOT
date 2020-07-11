exports.run = (client, message, args) => {
  //custom emoji
  const emojiName = "jy"
  const emoji = client.emojis.cache.find(emoji => emoji.name === emojiName)
  message.channel.send(`Prepare to feel purified :)`).then(message.channel.send(`${emoji}`)).catch(console.error);
}


