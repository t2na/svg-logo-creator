// need to import classes

const { Square } = require("./shapes")

describe("Square",()=>{
    test("SHould create instance of circle",()=>{
        const square = new Square();
        expect(typeof square).toBe("object")
    })



    
})