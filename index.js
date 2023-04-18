const inquirer = require("inquirer");
const fs = require("fs");
const generateLogo = require("./lib/generateLogo.js");

const questions = [
  "What text do you want in the logo?",
  "What colour do you want the logo text to be?",
  "What shape do you want the logo to be?",
  "What colour do you want the shape to be?",
];

function makeLogo(data) {
  const logo = generateLogo(data);
};

function init() {
  inquirer
    .prompt([
      {
        name: "text",
        message: questions[0],
        type: "input",
      },
      {
        name: "text_colour",
        message: questions[1],
        type: "input",
      },
      {
        name: "shape",
        message: questions[2],
        type: "rawlist",
        choices: ["Traingle", "Circle", "Square"],
      },
      {
        name: "shape_colour",
        message: questions[3],
        type: "input",
      },
    ])

    .then((answers) => {
      console.log(answers);
      makeLogo(answers);
    });
}

init();
