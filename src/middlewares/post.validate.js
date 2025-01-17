const { Category } = require('../models');

const CategoryValidade = async (categoryIds) => {
  const categories = await Category.findAll();
  const categoriesIds = categories.map((category) => category.id);
  const result = categoryIds.every((categoryId) => categoriesIds.includes(categoryId));
  return result;
};
    
const NewPostValidade = async (req, res, next) => {
  const { body } = req;
  const { title, content, categoryIds } = body;

  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const cateogryExist = await CategoryValidade(categoryIds);
  if (!cateogryExist) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  next();
};

const putPostValidade = async (req, res, next) => {
  const { body } = req;
  const { title, content } = body;

  if (!title || !content) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  next();
};

module.exports = { NewPostValidade, putPostValidade };