const { postServices } = require('../services');

const addNewBlogPost = async (req, res) => {
  const { id } = req.user;
  const { status, data } = await postServices.addNewBlogPost(req.body, id);
  res.status(status).json(data);
};

module.exports = { addNewBlogPost };