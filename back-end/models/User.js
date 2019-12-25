module.exports = (sequelize, DataType) => {

    const Users = sequelize.define('users', {
       
        user_id: {
            type: DataType.UUID,
            defaultValue: DataType.UUIDV4,
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        user_profile: {
            type: DataType.STRING,
        },
        username: {
            type: DataType.STRING,
            allowNull: false,
            unique: true
        },
        full_name: {
            type: DataType.STRING,
            // allowNull: false,
        },
        password: {
            type: DataType.STRING,
            allowNull: false,
        },
        birth: {
            type: DataType.INTEGER(10),
        },
        role: {
            type: DataType.ENUM('admin','user')
            
        },
    }, {
        
        freezeTableName: true, 
        timestamps: false, 
    })

    Users.associate = (models) => {  
        Users.hasMany(models.medias, {
            foreignKey: {
                name: 'user_id',
                allowNull: false
            }
        })
    }

    return Users
}