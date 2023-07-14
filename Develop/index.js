const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes');
const Svg = require('./lib/svg');
const fs = require('fs');

const start = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'shape',
            message: 'What shape do you want?',
            choices: ['circle', 'square', 'triangle']
        },
        {
            type: 'input',
            name: 'color',
            message: 'What color do you want the shape?',
        },
        {
            type: 'input',
            name: 'text',
            message: 'What text do you want (3 characters max)?',
            // limit to 3 characters
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What text color do you want?',
        }
    ]).then(({shape, color, text, textColor}) => {

        let chosenShape;
        if (shape === 'circle') {
            chosenShape = new Circle(color);
        } else if (shape === 'square') {
            chosenShape = new Square(color);
        } else {
            chosenShape = new Triangle(color);
        }

        const newSvg = new Svg(text, textColor, chosenShape);

        const mySvg = newSvg.render();

        console.log(mySvg);

        fs.writeFileSync('./output/logo.svg', mySvg);
    })
}

start();

