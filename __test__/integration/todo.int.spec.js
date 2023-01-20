const request = require('supertest')
const {db} = require('../../src/model')
const app = require('../../src/app')
const todo = require('../mocks/todo.json')
const {Todo} = require('../../src/model')

beforeAll(async()=>{
    await db.sync()
})

afterAll(async()=>{
    await Todo.destroy({truncate:true})
})

let endPointUrl = '/api/v1.0/todos'

describe("TODO" + endPointUrl,()=>{
    it("POST TODO",async()=>{
    let requestBody = todo
    const response = await request(app).post(endPointUrl).send(requestBody)
        // console.log(response)
    expect(response.status).toBe(201)
    })
    
})