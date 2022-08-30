 let myFunction = require('./function')

test("returnTwo",()=>{
    expect(myFunction.returnTwo()).toBe(2)
})

test("greeting",()=>{
    expect(myFunction.greeting("James")).toBe("Hello James")
    expect(myFunction.greeting("Jill")).toBe("Hello Jill")
})

test("add",()=>{
    expect(myFunction.add (5 , 9)).toBe(14)
})

test("multiply",()=>{
    expect(myFunction.multiply (2 , 9)).toBe(18)
    expect(myFunction.multiply(4,5)).toBe(20)
})

test("divide",()=>{
    expect(myFunction.divide (4 , 2)).toBe(2)
    expect(myFunction.divide (20 , 4)).toBe(5)
})

test("subtract",()=>{
    expect(myFunction.subtract (8 , 4)).toBe(4)
    expect(myFunction.subtract (7 , 3)).toBe(4)
})
