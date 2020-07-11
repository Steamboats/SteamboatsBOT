exports.run = (client, message, args) => {
  //custom emoji
  const emojiName = "jy"
  const emoji = client.emojis.find(emoji => emoji.name === emojiName)
  message.channel.send(`Prepare to feel purified :) ${emoji}`);
}


