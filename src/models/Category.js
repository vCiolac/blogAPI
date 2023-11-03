const Categorieschema = (sequelize, DataTypes) => {
  const CategoriesTable = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false,
    tableName: 'categories',
    underscored: true,
  });
  return CategoriesTable;
};

module.exports = Categorieschema;