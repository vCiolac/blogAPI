const { User } = require('../models');
const { generateToken } = require('../utils/generate.token');

const handleLogin = async (email, password) => {
  const findUser = await User.findOne({ where: { email, password } });
  if (!findUser) return { status: 400, data: { message: 'Invalid fields' } };
  const { id, displayName } = findUser;
  const token = generateToken({ id, displayName });
  return { status: 200, data: { token } };
};

module.exports = { handleLogin };
