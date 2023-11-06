const Category = require('./Category');
const BlogPost = require('./BlogPost');

const PostCatSchema = (sequelize, DataTypes) => {
  const PostCatTable = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  }, {
    timestamps: false,
    tableName: 'posts_categories',
    underscored: true,
  });
  PostCatTable.associate = ({ Category, BlogPost }) => {
    Category.belongsToMany(BlogPost, {
      through: PostCatTable,
      foreignKey: 'categoryId',
      otherkey: 'postId',
      targetKey: 'id',
    });
    BlogPost.belongsToMany(Category, {
      through: PostCatTable,
      foreignKey: 'postId',
      otherkey: 'categoryId',
      targetKey: 'id',
    });
  };
  return PostCatTable;
};

module.exports = PostCatSchema;