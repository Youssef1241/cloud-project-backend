const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  username: {
    type: 'String',
    required: true
  },
  email: {
    type: 'String',
    required: true
},
  password: {
    type: 'String',
    required: true
  },
  name: {
    type: 'String',
    required: true
  },
  userType: {
    type: 'String',
    enum: ['pharmacist', 'patient', 'doctor', 'admin'],
    required: true,
    default: 'patient'
},
});
const UserModel = model('user', UserSchema);

module.exports = UserModel;