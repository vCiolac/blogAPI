const { BlogPost, sequelize, PostCategory } = require('../models');
const { User, Category } = require('../models');

const addNewBlogPost = async (newPost, userId) =>
  sequelize.transaction(async (t) => {
    const { title, content, categoryIds } = newPost;
    const newBlogPost = await BlogPost.create(
      {
        title,
        content,
        userId,
        published: new Date(),
        updated: new Date(),
      },
      { transaction: t },
    );
    const { id } = newBlogPost;
    const categories = categoryIds.map((categoryId) =>
      PostCategory.create({ postId: id, categoryId }, { transaction: t }));
    await Promise.all(categories);
    return { status: 201, data: newBlogPost };
  });

const getAllBlogPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });
  return { status: 200, data: posts };
};

module.exports = {
  addNewBlogPost,
  getAllBlogPosts,
};