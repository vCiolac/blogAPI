const { User } = require('../models');

const LoginValidate = async (req, res, next) => {
  const { body } = req;
  const { email, password } = body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const userExist = await User.findOne({ where: { email } });
  if (!userExist) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  next();
};

module.exports = LoginValidate;