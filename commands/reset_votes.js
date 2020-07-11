const mongoose = require('mongoose');
const Food = require('../models/Food');

exports.run = async (client, message, args) => {
  try {
    const foodChoice = await Food.update(
      { //select all food
      },
      { // set votes to 0
        $set: {
          upvotes: 0
        }
      },
      { // options
        useFindAndModify: false // deprecation msg w/o this option
      }
    );

    message.channel.send(`All food votes has been resetted`);
  } catch(err) {
    message.channel.send(err.message);
  }
}