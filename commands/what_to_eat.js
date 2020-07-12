const mongoose = require('mongoose');
const Food = require('../models/Food');

exports.run = async (client, message, args) => {
  try {
    const loading = await message.channel.send('Deciding for indecisive plebians...');

    const allSuggestions = await Food.find();

    if (allSuggestions.length === 0) throw new Error('There are no choices in the database');

    // Is there a way to do this functionally loool
    const weightedSuggestions = [];
    for (let i = 0; i < allSuggestions.length; i++) {
      let food = allSuggestions[i];
      let upvotes = food.upvotes + 1;
      for (let j = 0; j < upvotes; j++) {
        weightedSuggestions.push(food);
      }
    }

    console.log('weighted suggestions: ', weightedSuggestions.map(food => food.title));

    const choice = weightedSuggestions[Math.floor(Math.random() * allSuggestions.length)];

    const embedMessage = {
      title: 'BOT has spoken',
      color: '#42B549',
      description: `My choice is **${choice.title}** with **${choice.upvotes}** upvotes`,
      footer: {
        text: 'If you want this to appear more, upvote this ;)'
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

