const mongoose = require('mongoose');

const OrderFoodSchema = mongoose.Schema({
  name: String,
  email: String,
  contacts: { type: Number, default: 54545454 },
  roadNo: { type: String, default: 'ABC road' },
  foodOrdered: { type: Array, default: [] },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const OrderFoodModel = mongoose.model('OrderFood', OrderFoodSchema);

module.exports = OrderFoodModel;
