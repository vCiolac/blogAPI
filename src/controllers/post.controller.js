const { postServices } = require('../services');

const addNewBlogPost = async (req, res) => {
  const { id } = req.user;
  const { status, data } = await postServices.addNewBlogPost(req.body, id);
  res.status(status).json(data);
};

const getAllBlogPosts = async (req, res) => {
  const { status, data } = await postServices.getAllBlogPosts();
  res.status(status).json(data);
};

const getBlogPostById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await postServices.getBlogPostById(id);
  res.status(status).json(data);
};

const updateBlogPost = async (req, res) => {
  const { id } = req.params;
  const { id: userId } = req.user;
  const { status, data } = await postServices.updateBlogPost(id, req.body, userId);
  res.status(status).json(data);
};

module.exports = {
  addNewBlogPost,
  getAllBlogPosts,
  getBlogPostById,
  updateBlogPost,
};