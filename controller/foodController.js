const mongoose = require('mongoose');
const FoodItems = require('../models/FoodItem.js');

exports.setFoodItem = async (req, res) => {
  const foodData = req.body;
  const newFoodItem = new FoodItems({
    ...foodData,
    createdAt: new Date().toDateString(),
  });
  try {
    await newFoodItem.save().then((result) => {
      res.status(201).json({
        message: 'Food Item created successfully',
        createdFood: { newFoodItem },
      });
    });
  } catch (error) {
    console.log(error);
  }
};
