const { loginServices } = require('../services');

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  const { status, data } = await loginServices.handleLogin(email, password);
  const { token } = data;
  res.status(status).json({ token });
};

module.exports = { handleLogin };