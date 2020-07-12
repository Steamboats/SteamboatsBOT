const mongoose = require('mongoose');
const Food = require('../models/Food');

// Exact copy of upvotes except inc value is -1
exports.run = async (client, message, args) => {
  // Sort all food by upvotes in ascending order
  try {
    let id = args[0];
    let comment = {
      body: args.slice(1).join(' ')
    };
    const foodChoice = await Food.findOneAndUpdate(
      { // find
        id: id 
      },
      { // updating
        $push: {
          comments: comment
        }
      },
      { // options
        useFindAndModify: false // deprecation msg w/o this option
      }
    );

    if (!foodChoice) throw new Error("ID doesn't exist");

    message.channel.send(`${foodChoice.title} has a comment added ${comment.body} by ${message.author.username}`);
  } catch(err) {
    message.channel.send(err.message);
  }
}

