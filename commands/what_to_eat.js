const mongoose = require('mongoose');
const Food = require('../models/Food');

exports.run = async (client, message, args) => {
  try {
    const allSuggestions = await Food.find();

    if (allSuggestions.length === 0) throw new Error('There are no choices in the database');

    const choice = allSuggestions[Math.floor(Math.random() * allSuggestions.length)];
    
    message.channel.send(`From my professional BOT opinion, you should have:\n ${choice.title}, upvoted ${choice.upvotes} times`).catch(console.error);
  } catch(err) {
    message.channel.send(`Error: ${err.message}`);
  }
}

