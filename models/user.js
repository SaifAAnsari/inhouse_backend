const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  message: { type: String, required: true }
});

const UserModel = mongoose.model('User', UserSchema,'user');

module.exports = UserModel;

