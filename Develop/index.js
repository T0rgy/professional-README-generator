// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = [
    { //Project title
        type: 'input',
        name: 'title',
        message: 'What is the title of the project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title to continue!');
                return false;
            } 
        }
    },
    { //Description of project
        type: 'input',
        name: 'description',
        message: 'Please describe your project. (Required)',
        validate: descriptInput => {
            if (descriptInput) {
                return true;
            } else {
                console.log('Please describe your project to continue!');
                return false;
            }
        }
    },
    { // Installation Instructions
        type: 'input',
        name: 'installation',
        message: 'How do you install your project? (Required)',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please provide your installation info to continue!');
                return false;
            }
        }
    },
    { // Usage Information
        type: 'input',
        name: 'usage',
        message: 'Describe how a a user/contributor can use this project. (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please describe how to use this project!');
                return false;
            }
        }

    },
    { // License Options
        type: 'checkbox',
        name: 'licensing',
        message: 'Choose a license for your project. (Required)',
        choices: ['GNUAGPLv3', 'GNUGPLv3', 'MozillaPublicLicense2.0', 'ApacheLicense2.0', 'MITLicense', 'BoostSoftwareLicense1.0', 'TheUnlicense', 'None'],
        validate: licensingInput => {
            if (licensingInput) {
                return true;
            } else {
                console.log('Please pick a license!');
                return false;
            }
        }
    },
    { // Contribuition Guidlines
        type: 'input',
        name: 'contribution',
        message: 'How can people contribute to this project? (Required)',
        validate: contribInput => {
            if (contribInput) {
                return true;
            } else {
                console.log('Please provide information on how to contribute to the project!');
                return false;
            }
        }
    },
    {// Testing information
        type: 'input',
        name: 'testing',
        message: 'Please enter any testing available. (Optional)',
    },
    { // GitHub Username
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username. (Required)',
        validate: gitInput => {
            if (gitInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    { // Email 
        type: 'input',
        name: 'email',
        message: 'Please enter your email address. (Optional)'
    }


];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('Congratulations! You generated a professional README file!')
    })
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput){
        console.log(userInput)
        writeToFile('README.md', generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
