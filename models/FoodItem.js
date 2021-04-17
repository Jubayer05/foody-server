const mongoose = require('mongoose');

const foodItemSchema = mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  foodImage: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const FoodItems = mongoose.model('FoodItems', foodItemSchema);

module.exports = FoodItems;
