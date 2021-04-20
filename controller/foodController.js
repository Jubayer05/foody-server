const mongoose = require('mongoose');
const FoodItems = require('../models/FoodItem.js');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const filterFile = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 4,
  },
  filterFile,
});

// NOTE: FOR IDENTIFY VERY FAST; REMOVE THIS LINE LATER
exports.multerUpload = upload.single('foodImage');

// NOTE: FOR IDENTIFY VERY FAST; REMOVE THIS LINE LATER
exports.getFoodItems = async (req, res) => {
  try {
    const allFoodItems = await FoodItems.find();
    res.status(200).send(allFoodItems);
  } catch (error) {
    console.log(error);
  }
};

// NOTE: FOR IDENTIFY VERY FAST; REMOVE THIS LINE LATER
exports.postFoodItem = async (req, res) => {
  const foodData = req.body;
  const newFoodItem = new FoodItems({
    ...foodData,
    foodImage: req.file.path,
    createdAt: new Date().toDateString(),
  });
  try {
    newFoodItem.save().then((result) => {
      res.status(201).json({
        message: 'Food Item created successfully',
        createdFood: { newFoodItem },
      });
    });
  } catch (error) {
    console.log(error);
  }
};

// NOTE: FOR IDENTIFY VERY FAST; REMOVE THIS LINE LATER
