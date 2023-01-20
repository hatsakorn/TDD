// const {createTodo} = require('../../src/controller/todo.controller')
const httpMocks = require('node-mocks-http');
const TodoController = require('../../src/controller/todo.controller')
const {Todo} = require('../../src/model')
const todo = require('../mocks/todo.json')

let req,res,next;
beforeAll(()=>{
    req = httpMocks.createRequest()
    res = httpMocks.createResponse()
    Todo.create = jest.fn()
    next = jest.fn()
})

describe("Todo controller: Create Todo",()=>{
    it("should have todo.controller.createTodo as a function",()=>{
        expect(typeof TodoController.createTodo).toBe("function")
    })

    it("should call TodoModel.create",()=>{
        //Arrange
        // let req = httpMocks.createRequest()
        // let res = httpMocks.createResponse()
        //setup expectation
        // Todo.create = jest.fn()
        //Action
        TodoController.createTodo(req,res)
        //Assert & Verify Expectation
        expect(Todo.create).toHaveBeenCalled()
    })
    it('should call Todo.create with newTodo',()=>{
        //Arrange
        // let req = httpMocks.createRequest()
        // let res = httpMocks.createResponse()
        req.body = todo;
        //setup expectation 
        // Todo.create = jest.fn()
        //Act
        TodoController.createTodo(req,res)
        //Assert & Verify Expectation
        expect(Todo.create).toHaveBeenCalledWith(todo)
    })
    it('should return 201 in response',()=>{

        req.body = todo

        TodoController.createTodo(req,res)

        expect(res.statusCode).toBe(201)
    })
    it('should end call',()=>{

        req.body = todo

        TodoController.createTodo(req,res)

        expect(res._isEndCalled()).toBeTruthy()
    })
    it('should return json', async ()=>{
        req.body = {...todo}
        Todo.create.mockReturnValue({...todo})
        // let formattedResponse = {
        //     message: 'create todo',
        //     todo:{...todo}
        // }
        await TodoController.createTodo(req,res)
        expect(res._getJSONData()).toEqual({...todo})
    })
    it('should haddle error', async ()=>{
        Todo.create.mockImplementation(()=>Promise.reject({message:'cannot create'}))
        req.body = todo

        await TodoController.createTodo(req,res,next)

        expect(next).toHaveBeenCalledWith({message:'cannot create'})
    })

})