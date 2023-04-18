class Shape {
  isColour(strColour) {
    // Snippet produced by ChatGPT
    return (
      /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(strColour) ||
      /^(red|green|blue|yellow|orange|purple|pink)$/.test(strColour)
    );
  }
}

class Rectangle extends Shape {
  constructor(colour) {
    super();
    if (!this.isColour(colour)) {
      throw new Error("Please enter a valid colour");
    }

    this.colour = colour;
  }

  render(colour) {
    return `
        <rect x="10" y="10" width="180" height="180" fill="${colour} "/>
        `;
  }
}

class Circle extends Shape {
  constructor(colour) {
    if (!this.isColour(colour)) {
      throw new Error("Please enter a valid colour");
    }

    super();
    this.colour = colour;
  }

  render(colour) {
    return `
        <circle cx="150" cy="100" r="90" fill="${colour}" />
        `;
  }
}

class Triangle extends Shape {
  constructor(colour) {
    if (!this.isColour(colour)) {
      throw new Error("Please enter a valid colour");
    }

    super();
    this.colour = colour;
  }

  render(colour) {
    return `
        <polygon points="150, 18 244, 182 56, 182" fill="${colour}" />
        `;
  }
}

module.exports = Rectangle;
module.exports = Circle;
module.exports = Triangle;