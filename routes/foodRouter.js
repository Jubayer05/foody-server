const express = require('express');
const {
  getFoodItems,
  postFoodItem,
  multerUpload,
} = require('../controller/foodController.js');
const router = express.Router();

router.get('/', getFoodItems);
router.post('/', multerUpload, postFoodItem);

module.exports = router;
