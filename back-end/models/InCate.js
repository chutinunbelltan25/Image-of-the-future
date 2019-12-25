module.exports = (sequelize, DataType) => {

    const Incates= sequelize.define('incate', {
       
        in1_id: {
            type: DataType.UUID,
            defaultValue: DataType.UUIDV4,
            allowNull: false,
            primaryKey: true,
            unique: true
        },
    },
    {

    freezeTableName: true, 
    timestamps: false, 
})
        return Incates
    }