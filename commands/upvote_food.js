const mongoose = require('mongoose');
const Food = require('../models/Food');

exports.run = async (client, message, args) => {
  // Sort all food by upvotes in ascending order
  try {
    let id = args[0];
    const foodChoice = await Food.findOneAndUpdate(
      { // find
        id: id 
      },
      { // updating
        $inc: {
          upvotes: 1
        }
      },
      { // options
        useFindAndModify: false // deprecation msg w/o this option
      }
    );

    if (!foodChoice) throw new Error("ID doesn't exist");

    message.channel.send(`${foodChoice.title} has been upvoted by ${message.author.username} and now has ${Number(foodChoice.upvotes) + 1}`);
  } catch(err) {
    message.channel.send(err.message);
  }
}


