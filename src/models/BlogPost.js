const BlogPostSchema = (sequelize, DataTypes) => {
  const BlogPostTable = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    user_id: {
      type: DataTypes.NUMBER,
      foreignKey: true,
    },
    published: DataTypes.STRING,
    updated: DataTypes.STRING
  }, {
    timestamps: false,
    tableName: 'blog_posts',
    underscored: true,
  });
  return BlogPostTable;
};

module.exports = BlogPostSchema;