const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
  date: { type: String, default: new Date().toISOString() },
});

const UserModel = mongoose.model('Users', UserSchema);

module.exports = UserModel;
