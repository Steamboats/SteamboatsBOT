const mongoose = require('mongoose');
const Food = require('../models/Food');

// Exact copy of upvotes except inc value is -1
exports.run = async (client, message, args) => {
  try {
    const loading = await message.channel.send('Downvoting...');

    let id = args[0];
    const foodChoice = await Food.findOneAndUpdate(
      { // find
        id: id 
      },
      { // updating
        $inc: {
          upvotes: -1
        }
      },
      { // options
        useFindAndModify: false // deprecation msg w/o this option
      }
    );

    if (!foodChoice) throw new Error("ID doesn't exist");

    const embedMessage = {
      title: 'Successfully Downvoted',
      color: '#42B549',
      description: `"**${foodChoice.title}**" has been downvoted by **"${message.author.username}"** and currently has ${foodChoice.upvotes - 1} upvotes.`,
      footer: {
        text: 'Y u haf to b such a hater...',
      },
      timestamp: new Date(),
    };

    message.channel
      .send({
        embed: embedMessage
      })
      .then(() => {
        // Delete loading message
        loading.delete();
      })
      .catch(console.error);
  } catch(err) {
    const embedMessage = {
      title: 'An error has occurred',
      color: '#BA1E42',
      description: `${err.message}`,
    }

    message.channel
      .send({
        embed: embedMessage
      })
      .catch(console.error);
  }
}

