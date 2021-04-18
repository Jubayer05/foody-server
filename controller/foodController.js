const mongoose = require('mongoose');
const FoodItems = require('../models/FoodItem.js');

exports.getFoodItems = async (req, res) => {
  try {
    const allFoodItems = await FoodItems.find();
    res.status(200).send(allFoodItems);
  } catch (error) {
    console.log(error);
  }
};
