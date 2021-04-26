const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const foodRouter = require('./routes/foodRouter.js');
const orderRouter = require('./routes/orderRouter.js');
const userRouter = require('./routes/userRouter.js');
const adminRouter = require('./routes/adminRouter.js');

const app = express();

app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use(cors());
app.use(bodyParser.json());

app.use('/foodItems', foodRouter);
app.use('/order', orderRouter);
app.use('/user', userRouter);
app.use('/admin', adminRouter);

const CONNECTION_URL = `mongodb+srv://${process.env.FOODY_USERNAME}:${process.env.PASSWORD}@cluster0.f3cn5.mongodb.net/foody?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Running on Port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

mongoose.set('useFindAndModify', false);
