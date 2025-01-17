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

const getBlogPostById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });
  if (!post) return { status: 404, data: { message: 'Post does not exist' } };
  return { status: 200, data: post };
};

const updateBlogPost = async (id, post, userId) => {
  const { title, content } = post;
  const verifyPost = await BlogPost.findByPk(id);
  if (verifyPost.userId !== userId) {
    return { status: 401, data: { message: 'Unauthorized user' } };
  }
  await BlogPost.update(
    { title, content },
    { where: { id } },
  );
  const updatedPost = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });
  return { status: 200, data: updatedPost };
};

module.exports = {
  addNewBlogPost,
  getAllBlogPosts,
  getBlogPostById,
  updateBlogPost,
};