const PostCatSchema = (sequelize, DataTypes) => {
  const PostCatTable = sequelize.define('PostCat', {
    post_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  }, {
    timestamps: false,
    tableName: 'posts_categories',
    underscored: true,
  });
  return PostCatTable;
};

module.exports = PostCatSchema;