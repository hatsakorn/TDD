const {Todo} = require('../model')

exports.createTodo = async (todo)=>{
    return await Todo.create(todo)
}