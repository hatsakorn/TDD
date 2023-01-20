const{Todo} = require('../model')
const TodoService = require('../service/todoService')

exports.createTodo = async (req,res,next)=>{
    try{
    const todo = req.body
    // console.log(req.body)
    // const newTodo = await Todo.create(todo)
    const newTodo = await TodoService.createTodo(todo)
    res.status(201).json(newTodo)
    }catch(err){
        next(err)
    }
}