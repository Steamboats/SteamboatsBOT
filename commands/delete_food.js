const mongoose = require('mongoose');
const Food = require('../models/Food');

// Exact copy of upvotes except inc value is -1
exports.run = async (client, message, args) => {
  // Sort all food by upvotes in ascending order
  try {
    let id = args[0];
    const foodChoice = await Food.findOne(
      { // find
        id: id 
      },
    );

    console.log('keys: ', Object.keys(message.author));

    if (!foodChoice) throw new Error("ID doesn't exist or you didn't input an ID");

    if (foodChoice.author === message.author.username) {
      const deletedChoice = await foodChoice.deleteOne();
    } else {
      throw new Error(`Nice try ${message.author.username} but you have no rights to delete this :P, get ${foodChoice.author} to do it instead`);
    }

    message.channel.send(`${deletedChoice.title} has been deleted by ${message.author.username}`);
  } catch(err) {
    message.channel.send(err.message);
  }
}

