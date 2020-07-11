const mongoose = require('mongoose');
const Food = require('../models/Food');

exports.run = async (client, message, args) => {
  const loading = message.channel.send('Adding...');
  console.log(loading);

  // Get last added object for ID
  let lastAdded = await Food.find()
    .sort({ 'meta.dateCreated': -1 })
    .limit(1);
  // console.log('lastAdded is: ', lastAdded);

  let id = 0;
  // If lastAdded is not empty, set last id + 1
  if (lastAdded.length > 0) {
    id = Number(lastAdded[0]['id']) + 1;
  }

  let title = args.join(' ');
  let author = message.author.username;
  const newFood = {
    id: id,
    title: title,
    author: author,
    meta: {
      createdBy: author,
      lastUpdatedBy: author
    }
  };
  
  // Mongoose create
  const addedFood = await Food.create(newFood);

  message.channel
    .send(`${addedFood.author} has added "${addedFood.title}" to the Food collection`)
    .catch(console.error);
}

