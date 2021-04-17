const express = require('express');
const { setFoodItem } = require('../controller/foodController');

const router = express.Router();

router.post('/', setFoodItem);

module.exports = router;
