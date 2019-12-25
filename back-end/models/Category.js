module.exports = (sequelize, DataType) => {

    const Category = sequelize.define('categorys', {
        category_id: {
            type: DataType.UUID,
            defaultValue: DataType.UUIDV4,
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        category_name: {
            type: DataType.STRING,
            allowNull: false,
        },
        
    },
    {
        freezeTableName: true, 
        timestamps: false, 
    })

    Category.associate = (models) => {  
        Category.belongsToMany(models.medias, {
            foreignKey: {
                name: 'category_id',
                allowNull: false
            },
            through: models.incate
        })
    }
    
    return Category
}