# Professional `README.md` Generator

## Description 

A command-line application that dynamically generates and exports a professional `README.md` file from a user's input utilizing the `Inquirer` package. 

**Features include**:

- Allows user to provide input utilizing a command-line interface to include relevant application information such as:
    - A description
    - Installation instructions
    - Usage information
    - Contribution guidelines
    - Test instructions
    - License information
    - Contact information 
-  Dynamically generates a professional `README.md` files that includes:
    - A application license badge with a corresponding hyperlink to relevant documentation
    - A table of contents with anchor links to facilitate document navigation
    - A contact information section with a link to the user's GitHub profile and a `Mailto link` with the user's provided email address 
- Exports the generated `README.md` file to this application's directory 

This exercise was provided by Northwestern University and edX through the Coding boot camp. Submitted as fulfillment of the Module 09 exercise during the December, 2023 - June, 2024 cohort.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

- Prerequisites:
    - Download and install [Node.js](https://nodejs.org/en)

1. Download this repository's contents to your local machine utilizing the green `Code` button. 
    - The "Download ZIP" option is sufficient for installation. Ensure that you extract the folder's contents.
2. Open the downloaded directory in your preferred command-line interface. 
    - Possible options including "Terminal" on Mac, "Git Bash" on Windows, or VSCode.
3. Within the downloaded directory, run the following command: 
    > npm install 
    - This will install the Node.js packages "Inquirer" and "fs" and their dependencies which are detailed in the `package.json` file.

## Usage

Once the installation instructions have been completed, the application can be utilized. 

1. Utilizing your preferred command-line interface, set your working directory to this application's downloaded directory.
2. Within the downloaded directory, initialize the application using the command:
    > node index.js
3. This will present you with a series of prompts that will be utilized to develop a `README.md` file for your application. Type your response and use the "Enter"/"Return" button to submit your response and advance to the next prompt. 
    - For the "License" information prompt, utilize the arrow keys to navigate to your selected license.
3. Upon completion of the final prompt, "Your email address", your `README.md` file will be exported to the downloaded directory with a file name "professional-README.md"
4. Upon a successful export, the following text will be logged to the console: "Your professional README.md file has been exported!". If an error has occurred, an error message will be logged.

- [Link to a Walkthrough Video](https://app.screencastify.com/v3/watch/DgCoADqlZ89i0H3B0fi0)

- [Link to the GitHub repository](https://github.com/anthonyero/professional-README-generator)


The relevant JavaScript files are included within this repository. These include the `index.js` file and the `package.json` file(s).

JavaScript files include comments detailing changes implemented within them. Further justifications can also be found within the repository's "Issues" tab.

Please refer to the commit history and branches within the repository for a tracked history of changes.

## Credits

Initial starter code was provided by Northwestern University and edX through the Coding boot camp. Starter files were uploaded in the commit: "Initial commit - starter files".

This application utilizes the [Inquirer](https://www.npmjs.com/package/inquirer) package and [Node.js](https://nodejs.org/en). The license badges utilized in the generated `README.md` files referenced [Lukas-h's license-badges.md gist GitHub page](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba) and [MarkedDown's Licenses GitHub repository](https://github.com/MarkedDown/Licenses). Personal modifications were made to a select number badges and hyperlinks to documentation as appropriate. 

## License

N/A

![Gif of Exported README.md File](/assets/images/Professional%20README%20Generator%20-%20Exported%20File%20Gif.gif)