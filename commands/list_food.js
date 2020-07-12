const mongoose = require('mongoose');
const Food = require('../models/Food');

exports.run = async (client, message, args) => {
  try {
    const loading = await message.channel.send('Loading...');

    // Sort all food by upvotes in descending order
    const allFood = await Food.find().sort({ upvotes: -1 });
    const foodChoices = allFood
        .map(food => {
          return {
            name: `${food.title} - ID: ${food.id}`,
            value: `Upvotes: ${food.upvotes}, Author: ${food.author}`
          }
        });

    if (!foodChoices) throw new Error("No Food choices have been added yet");

    const embedMessage = {
      title: 'All Food Choices',
      color: 13858303,
      fields: foodChoices,
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

