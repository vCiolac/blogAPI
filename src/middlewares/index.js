const LoginValidate = require('./login.validate');
const userValidate = require('./user.validate');
const authMiddleware = require('./auth');
const postValidate = require('./post.validate');

module.exports = {
  LoginValidate,
  userValidate,
  authMiddleware,
  postValidate,
};