// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your project's title?",
        name: "projectTitle"
    },
    {
        type: "input",
        message: "Provide a description for your application:",
        name: "description"
    },
    {
        type: "input",
        message: "Installation Instructions:",
        name: "installation"
    },
    {
        type: "input",
        message: "Usage information:",
        name: "usage"
    },
    {
        type: "input",
        message: "Contribution guidelines:",
        name: "contribution"
    },
    {
        type: "input",
        message: "Test instructions:",
        name: "testInstructions"
    },
    {
        type: "list",
        message: "License:",
        name: "license",
        choices: ["None","Apache License 2.0", "GNU General Public License v3.0", "MIT License", 'BSD 2-Clause "Simplified"', 'BSD 3-Clause "New" or "Revised" License',
        "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0",
        "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"]
    },
    {
        type: "input",
        message: "Your GitHub username:",
        name: "githubUsername"
    },
    {
        type: "input",
        message: "Your email address:",
        name: "email"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        writeToFile('professional-README.md', response);
    })

}

// Function call to initialize app
init();
