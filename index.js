const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
    {
        type: "input",
        message: "What is your project's title?",
        name: "projectTitle"
    },
    {
        type: "editor",
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

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.error(err) : console.log("Your professional README.md file has been exported!"))
}

function constructREADME(data) {
    const badgeLink = badgeRequest(data);
    const generatedREADME = `${badgeLink}
# ${data.projectTitle}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contribution}

## Tests

${data.testInstructions}

## License

${data.license}

## Questions

If you have any additional questions, please feel free to [contact me](mailto:${data.email}). You can also access my [GitHub Profile](https://github.com/${data.githubUsername})`
    return generatedREADME
}

function badgeRequest(data) {
    const badgeSelection = data.license;
    let badgeLink = ""
    switch (badgeSelection) {
        case "None":
            badgeLink = "";
            break;
        case "Apache License 2.0": 
            badgeLink = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
            break;
        case "GNU General Public License v3.0":
            badgeLink = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
            break;
        case "MIT License":
            badgeLink = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            break;
        case 'BSD 2-Clause "Simplified"':
            badgeLink = "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
            break;
        case 'BSD 3-Clause "New" or "Revised" License':
            badgeLink = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
            break;
        case  "Boost Software License 1.0":
            badgeLink = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
            break;
        case "Creative Commons Zero v1.0 Universal":
            badgeLink = "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
            break;
        case "Eclipse Public License 2.0": 
            badgeLink = "[![License](https://img.shields.io/badge/License-EPL_2.0-2C2255?style=for-the-badge)](https://opensource.org/license/epl-2-0/)";
            break;
        case "GNU Affero General Public License v3.0":
            badgeLink = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
            break;
        case "GNU General Public License v2.0":
            badgeLink = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
            break;
        case "GNU Lesser General Public License v2.1":
            badgeLink = "[![License](https://img.shields.io/badge/License-LGPL_v2.1-blue.svg)](https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html)";
            break;
        case "Mozilla Public License 2.0":
            badgeLink = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
            break;
        case "The Unlicense":
            badgeLink = "[![License: Unlicense](https://img.shields.io/badge/License-Unlicense-blue.svg)](http://unlicense.org/)";
            break;
        default:
            badgeLink = ""
            break;
    }
    return badgeLink;
}

function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        const generatedREADME = constructREADME(response);
        writeToFile('professional-README.md', generatedREADME);
    })

}

init();
