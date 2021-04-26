const express = require('express');
const {
  postOrderFood,
  getAllOrder,
} = require('../controller/orderController.js');

const router = express.Router();

router.get('/', getAllOrder);
router.post('/', postOrderFood);

module.exports = router;
