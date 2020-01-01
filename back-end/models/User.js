module.exports = (sequelize, DataType) => {

    const Users = sequelize.define('users', {
       
        user_id: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            unique: true,
            autoIncrement: true
        },
        user_profile: {
            type: DataType.STRING(10000),
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
            type: DataType.DATE,
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