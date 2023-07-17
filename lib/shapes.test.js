// need to import classes

const { Circle, Square, Triangle } = require("./shapes")
const Svg = require('./svg')

describe('Shapes', () => {

    describe("Square",()=>{
        it("Should be an object",()=>{
            const square = new Square();
            expect(typeof square).toBe("object")
        })
        it('should render correctly', () => {
            const square = new Square();
            expect(square.render()).toBe(`<rect x="50" y="20" width="200" height="200" fill="${this.color}" />`)
        })
    })

    describe("Circle",()=>{
        it("Should be an object",()=>{
            const circle = new Circle();
            expect(typeof circle).toBe("object")
        })
        it('should render correctly', () => {
            const circle = new Circle();
            expect(circle.render()).toBe(`<circle cx="150" cy="100" r="80" fill="${this.color}" />`)
        })
    })

    describe("Triangle",()=>{
        it("Should be an object",()=>{
            const triangle = new Triangle();
            expect(typeof triangle).toBe("object")
        })
        it('should render correctly', () => {
            const triangle = new Triangle();
            expect(triangle.render()).toBe(`<polygon points="150, 15 270, 156.15 30, 156.15" fill="${this.color}" />`)
        })
    })

    
});
