const {add,multiply,divide,minus} = require('./math')

let input1,input2
beforeAll(()=>{
    input1 = 2
    input2 = 5
})

describe("Math FN test",()=>{

    it("add function must return 4 by input 2 plus 2",()=>{
        // AAA pattern 
        // Arrange - prepare neccessay data
        let dummy = ()=>{}
        //Action - test it (exercise)
        let result = add(input1,input2,dummy)
        //Assert - confirm result
        expect(result).toBe(input1+input2)
    })
    
    it("multiply function",()=>{
        let result = multiply(input1,input2)
        expect(result).toBe(input1*input2)
    })
    
    test("divide function",()=>{
        let result = divide(input1,input2)
        expect(result).toBe(input1/input2)
    })

})

describe("Minus FN:TDD",()=>{
    it("should have minus as a function",()=>{
        expect(typeof minus).toBe('function')
    })
    it("should return Number",()=>{
        const result = minus()
        expect(typeof result).toBe('number')
    })
    it("should return 1 when provide 5,4 as a parameter",()=>{
        let a = 5
        let b = 4

        const result = minus(5,4)

        expect(result).toBe(a-b)
    })
})