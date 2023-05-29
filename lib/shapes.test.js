const { Triangle, Circle, Square } = require("./shapes.js");

describe('Shapes', () => {
    test('Triangle shape should render as desired', () => {
        const shape = new Triangle("blue");
        expect(shape.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });

    test('Circle shape should render as desired', () => {
        const shape = new Circle("green");
        expect(shape.render()).toBe('<circle cx="150" cy="100" r="90" fill="green" />');
      });

    test('Square shape should render as desired', () => {
        const shape = new Square("yellow");
        expect(shape.render()).toBe('<rect x="60" y="10" width="180" height="180" fill="yellow" />');
      });

});

