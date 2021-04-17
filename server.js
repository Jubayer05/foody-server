const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const foodRouter = require('./routes/foodRouter.js');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/foodItems', foodRouter);

const CONNECTION_URL = `mongodb+srv://${process.env.FOODY_USERNAME}:${process.env.PASSWORD}@cluster0.f3cn5.mongodb.net/foodItems?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Running on Port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// app.get('/', (req, res) => {
//   res.send('Hello Jubayer, Welcome to Foody from backend');
// });

mongoose.set('useFindAndModify', false);
