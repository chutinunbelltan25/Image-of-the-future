module.exports = (sequelize, DataType) => {

    const Inkeys= sequelize.define('inkey', {
        
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
        return Inkeys
    }