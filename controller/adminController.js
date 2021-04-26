const AdminModel = require('../models/adminModel.js');

exports.findAdmin = async (req, res) => {
  const { email } = req.body;
  try {
    const admin = await AdminModel.findOne({ email });
    res.status(200).json(admin);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: 'you are not an admin' });
  }
};

exports.addAdmin = async (req, res) => {
  const adminData = req.body;
  const newAdmin = new AdminModel(adminData);
  try {
    newAdmin.save().then((result) => {
      res.status(201).json(result);
    });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};
