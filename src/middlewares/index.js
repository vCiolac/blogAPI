const LoginValidate = require('./login.validate');
const userValidate = require('./user.validate');
const authMiddleware = require('./auth');

module.exports = {
  LoginValidate,
  userValidate,
  authMiddleware,
};