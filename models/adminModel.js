const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contactNum: { type: Number, required: true },
});

const AdminModel = mongoose.model('Admins', AdminSchema);

module.exports = AdminModel;
