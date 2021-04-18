const express = require('express');
const { getFoodItems } = require('../controller/foodController.js');
const router = express.Router();

router.get('/', getFoodItems);

module.exports = router;
