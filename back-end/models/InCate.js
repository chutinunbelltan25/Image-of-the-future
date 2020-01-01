module.exports = (sequelize, DataType) => {

  const Incates = sequelize.define('incate', {

    in1_id: {
      type: DataType.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true,
      autoIncrement: true
    },
  },
    {

      freezeTableName: true,
      timestamps: false,
    })
  // Incates.associate = (models) => {
  //   Incates.belongsTo(models.medias, {
  //     foreignKey: {
  //       name: 'media_id',
  //       allowNull: false
  //     }
  //   })
  //   Incates.belongsTo(models.categorys, {
  //     foreignKey: {
  //       name: 'category_id',
  //       allowNull: false
  //     }
  //   })
  // }
  return Incates
}