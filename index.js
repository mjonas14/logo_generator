const inquirer = require("inquirer");
const fs = require("fs");
const generateLogo = require("./lib/generateLogo.js");

const questions = [
  "What text do you want in the logo?",
  "What colour do you want the logo text to be?",
  "What shape do you want the logo to be?",
  "What colour do you want the shape to be?",
];

function isValidText(input) {
  if (input.length <= 3 && input.length >=1) return true;

  return 'Please input text between 1 and 3 characters';
};

function isValidColour(input) {
  let validColours = ['aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgrey', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'grey', 'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgrey', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen'];

  if (validColours.includes(input.toLowerCase()) || /^#[0-9A-F]{6}$/i.test(input.toLowerCase())) return true;

  return 'Please input a valid colour';
};

function makeLogo(data) {
  const logo = generateLogo(data);

  fs.writeFile('logo.svg', logo, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log("Generated logo.svg");
  });

};

function init() {
  inquirer
    .prompt([
      {
        name: "text",
        message: questions[0],
        type: "input",
        validate: isValidText,
      },
      {
        name: "text_colour",
        message: questions[1],
        type: "input",
        validate: isValidColour,
      },
      {
        name: "shape",
        message: questions[2],
        type: "rawlist",
        choices: ["Triangle", "Circle", "Square"],
      },
      {
        name: "shape_colour",
        message: questions[3],
        type: "input",
        validate: isValidColour,
      },
    ])

    .then((answers) => {
      makeLogo(answers);
    });
}

init();
