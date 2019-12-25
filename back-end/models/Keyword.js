module.exports = (sequelize, DataType) => {

    const Keywords = sequelize.define('keywords', {
        keyword_id: {
            type: DataType.UUID,
            defaultValue: DataType.UUIDV4,
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        keyword_name: {
            type: DataType.STRING,
            allowNull: false,
        },
        
    },
    {
       
        freezeTableName: true, 
        timestamps: false, 
    })

    Keywords.associate = (models) => {  
        Keywords.belongsToMany(models.medias, {
            foreignKey: {
                name: 'keyword_id',
                allowNull: false
            },
            through: models.inkey
        })
    }

    return Keywords
}