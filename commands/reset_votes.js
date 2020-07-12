const mongoose = require('mongoose');
const Food = require('../models/Food');

exports.run = async (client, message) => {
  try {
    const foodChoice = await Food.updateMany(
      { //select all food with unvotes >0
        upvotes: { $ne:0 }
      },
      { // set votes to 0
        $set: {
          upvotes: 0
        }
      }
    );

    message.channel.send(`All food votes has been resetted`);
  } catch(err) {
    message.channel.send(err.message);
  }
}