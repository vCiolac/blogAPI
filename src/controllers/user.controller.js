const { userServices } = require('../services');

const postUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { status, data } = await userServices.postUser(displayName, email, password, image);
  const { token } = data;
  res.status(status).json({ token });
};

const getAllUsers = async (_req, res) => {
  const { status, data } = await userServices.getAllUsers();
  res.status(status).json(data);
};

module.exports = { postUser, getAllUsers };