const mongoose = require('mongoose');
const Food = require('../models/Food');

exports.run = async (client, message) => {
  try {
    const loading = await message.channel.send('Resetting...');

    const foodChoice = await Food.find().updateMany(
    {}, 
    {
      $set: {
        upvotes: 0
      }
    }, {
      multi: true
    });

    const embedMessage = {
      title: 'Successfully Reset Votes',
      color: '#42B549',
      description: `${message.author.username} has reset all votes on all Food items.`,
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
