const express = require('express');
const { postOrderFood } = require('../controller/orderController.js');

const router = express.Router();

router.post('/', postOrderFood);

module.exports = router;
