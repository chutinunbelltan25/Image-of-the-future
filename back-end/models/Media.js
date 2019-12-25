module.exports = (sequelize, DataType) => {

    const Medias = sequelize.define('medias', {
        media_id: {
            type: DataType.UUID,
            defaultValue: DataType.UUIDV4,
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        media_url: {
            type: DataType.STRING,
            allowNull: false,
        },
        media_name: {
            type: DataType.STRING,
            allowNull: false,
        },
        text: {
            type: DataType.STRING,
            allowNull: false,
        },
        status: {
            type: DataType.STRING,
            allowNull: false,
        },
        resson: {
            type: DataType.STRING,
            allowNull: false,
        },
        approve_date: {
            type: DataType.STRING,
            allowNull: true,
        },
        number_of_download: {
            type: DataType.INTEGER,
            allowNull: false,
        },
    }, {
        
        freezeTableName: true, 
        timestamps: false, 
    })

    Medias.associate = (models) => { 
        Medias.belongsTo(models.users, {
            foreignKey: {
                name: 'user_id',
                allowNull: false
            }
        })
        Medias.belongsToMany(models.categorys, {
            foreignKey: {
                name: 'media_id',
                allowNull: false
            },
            through: models.incate
        })
        Medias.belongsToMany(models.keywords, {
            foreignKey: {
                name: 'media_id',
                allowNull: false
            },
            through: models.inkey
        })
    }

    return Medias
}