class Shape {};

class Square extends Shape {
  constructor(colour) {
    super();
    
    this.colour = colour;

  }

  render(colour) {
    return `<rect x="60" y="10" width="180" height="180" fill="${this.colour}" />`;
  }
};

class Circle extends Shape {
  constructor(colour) {
    super();

    this.colour = colour;
  }

  render(colour) {
    return `<circle cx="150" cy="100" r="90" fill="${this.colour}" />`;
  }
};

class Triangle extends Shape {
  constructor(colour) {
    super();

    this.colour = colour;
  }

  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.colour}" />`;
  }
};

module.exports = { Triangle, Circle, Square };

