module.exports = (sequelize, DataType) => {

  const Inkeys = sequelize.define('inkey', {

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
  // Inkeys.associate = (models) => {
  //   Inkeys.belongsTo(models.medias, {
  //     foreignKey: {
  //       name: 'media_id',
  //       allowNull: false
  //     }
  //   })
  //   Inkeys.belongsTo(models.keywords, {
  //     foreignKey: {
  //       name: 'keyword_id',
  //       allowNull: false
  //     }
  //   })
  // }
  return Inkeys
}