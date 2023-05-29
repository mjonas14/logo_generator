const { Triangle, Circle, Square } = require("./shapes.js");

let logo = `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
`;

function generate(data) {

  // Create the shape desired by calling class from shapes.js
  let logoShape;
  if (data.shape === "Triangle") {
    logoShape = new Triangle(data.shape_colour);
  } else if (data.shape === "Circle") {
    logoShape = new Circle(data.shape_colour);
  } else {
    logoShape = new Square(data.shape_colour);
  }

  // Add the shape to the SVG html code
  logo += logoShape.render(data.shape_colour);

  // Append final code snippet
  logo += `
    <text x="150" y="130" font-size="60" text-anchor="middle" fill="${data.text_colour}">${data.text}</text>
    `;

  return logo;
}

module.exports = generate;
