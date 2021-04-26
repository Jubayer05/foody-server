const express = require('express');
const {
  signin,
  signup,
  getAllUser,
} = require('../controller/authController.js');

const router = express.Router();

router.get('/getAllUser', getAllUser);
router.post('/signin', signin);
router.post('/signup', signup);

module.exports = router;
