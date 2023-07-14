class Shape {
    constructor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
        // can also use 50%, 50% instead of 150, 100
    }
}

class Square extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `<rect x="93.75" y="43.75" width="112.5" height="112.5" fill="${this.color}" />`
    }
}
// x,y is coordinates for top left corner, feel free to mess with it to confirm

class Triangle extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `<polygon points="150, 43.75 206.25, 156.15 93.75, 156.15" fill="${this.color}" />`
    }
}

// each pair are x, y coordinates, separated with a space

module.exports = {Circle, Square, Triangle};