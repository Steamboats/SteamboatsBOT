const mongoose = require('mongoose');
const Food = require('../models/Food');

exports.run = async (client, message, args) => {
  // Sort all food by upvotes in ascending order
  const allFood = await Food.find().sort({ upvotes: 1 });
  const foodChoices = allFood
      .map(food => `ID ${food.id} - ${food.title} has ${food.upvotes} upvotes, suggested by ${food.author} on ${food.meta.dateCreated.toLocaleDateString("en-US")}`)
      .join(',\n')

  message.channel
    .send(`All Food choices added: \n${foodChoices}`);
}

