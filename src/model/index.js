const Todo = require('./Todo')
const User = require('./User')
const db = require('../connection/database')


User.hasMany(Todo, {as: 'todos'})
Todo.belongsTo(User)


module.exports = {User,Todo,db}