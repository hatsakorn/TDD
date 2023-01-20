const {DataTypes,Model} = require('sequelize')
const db = require('../connection/database')

class User extends Model {}

// User.init({},{})
User.init({
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize:db,
    modelName: 'user'
})

module.exports = User;