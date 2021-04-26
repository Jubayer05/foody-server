const OrderFoodModel = require('../models/OrderFood.js');

exports.getAllOrder = async (req, res) => {
  try {
    const allOrder = await OrderFoodModel.find();
    res.status(200).send(allOrder);
  } catch (error) {
    console.log(error);
  }
};

exports.postOrderFood = async (req, res) => {
  const orderData = await req.body;

  const newOrder = new OrderFoodModel(orderData);
  try {
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    console.log(error);
  }
};
