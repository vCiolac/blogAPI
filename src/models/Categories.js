const Categorieschema = (sequelize, DataTypes) => {
  const CategoriesTable = sequelize.define('Categories', {
    name: DataTypes.string,
  }, {
    timestamps: false,
    tableName: 'categories',
    underscored: true,
  });
  return CategoriesTable;
};

module.exports = Categorieschema;