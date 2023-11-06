const { categoriesServices } = require('../services');

const addNewCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  const newCategory = await categoriesServices.addNewCategory(req.body);
  res.status(201).json(newCategory);
};

const getAllCategories = async (_req, res) => {
  const categories = await categoriesServices.getAllCategories();
  res.status(200).json(categories);
};

module.exports = { addNewCategory, getAllCategories };