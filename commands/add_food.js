const mongoose = require('mongoose');
const Food = require('../models/Food');

exports.run = async (client, message, args) => {
  try {
    const loading = await message.channel.send('Adding...');

    // Get last added object for ID
    const lastAdded = await Food.find()
      .sort({ 'meta.dateCreated': -1 })
      .limit(1);
    // console.log('lastAdded is: ', lastAdded);

    let id = 0;
    // If lastAdded is not empty, set last id + 1
    if (lastAdded.length > 0) {
      id = Number(lastAdded[0]['id']) + 1;
    }

    const title = args.join(' ');
    const authorName = message.author.username;

    // Validation to match "AnyWord @ AnyWord"
    if (!title.match(/[\w\s]{1,}@[\s\w]{1,}/g)) {
      throw new Error("Make sure what you're adding is in the format **'Place @ Location'**")
    }

    const newFood = {
      id: id,
      title: title,
      author: authorName,
      meta: {
        createdBy: authorName,
        lastUpdatedBy: authorName
      }
    };
    
    // Mongoose create
    const addedFood = await Food.create(newFood);

    const embedMessage = {
      title: 'Successfully Added',
      color: '#42B549',
      description: `**${addedFood.author}** has added **"${addedFood.title}"** to the Food collection`,
    }

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

