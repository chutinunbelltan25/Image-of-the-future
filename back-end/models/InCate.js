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

  return Incates
}