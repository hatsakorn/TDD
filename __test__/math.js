const add = (a,b,printFN) => {
    printFN()
    return a+b;
}

const multiply = (a,b) => {
    return a*b;
}

const divide = (a,b) => {
    return a/b;
}
let minus = (a,b) => {
    return a-b
}
module.exports = {add,multiply,divide,minus}