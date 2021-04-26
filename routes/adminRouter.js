const express = require('express');
const { findAdmin, addAdmin } = require('../controller/adminController.js');
const { auth } = require('../middleware/auth.js');

const router = express.Router();

router.post('/findAdmin', findAdmin);
router.post('/addAdmin', addAdmin);

module.exports = router;
