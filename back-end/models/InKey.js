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
  return Inkeys
}