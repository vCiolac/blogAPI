const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET || 'suaSenhaSecreta';

const auth = (req, res, next) => {
  const bearerToken = req.header('Authorization');

  if (!bearerToken || bearerToken === undefined) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const token = bearerToken.split(' ')[1];
    const user = jwt.verify(token, SECRET);
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = auth;