const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema for Food Place suggestions
const FoodSchema = new Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  upvotes: { type: Number, default: 0, required: true },
  comments: [{
    body: String,
    dateCreated: {
      type: Date,
      default: Date.now
    }
  }],
  meta: {
    createdBy: String,
    dateCreated: {
      type: Date,
      default: Date.now
    },
    dateUpdated: {
      type: Date,
      default: Date.now
    },
    lastUpdatedBy: {
      type: String,
      required: true
    }
  }
});

module.exports = mongoose.model('Food', FoodSchema);
