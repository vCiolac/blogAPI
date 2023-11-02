const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET || 'suaSenhaSecreta';

const generateToken = (data) => {
  const token = jwt.sign(data, SECRET);
  return token;
};

module.exports = { generateToken };
