const {DataTypes,Model} = require('sequelize')
const db = require('../connection/database')

class Todo extends Model {}

// User.init({},{})
Todo.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    completed:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
},{
    sequelize:db,
    modelName: 'todo'
})

module.exports = Todo;