// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
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
    { // License Options
        type: 'checkbox',
        name: 'licensing',
        message: 'Choose a license for your project. (Required)',
        choices: ['Apache', 'Common-Development-and Distribution', 'GNU-General-Public', 'MIT', 'Mozilla-Public', 'None'],
        validate: licensingInput => {
            if (licensingInput) {
                return true;
            } else {
                console.log('Please pick a license!');
                return false;
            }
        }
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('Congratulations! You generated a professional README file!')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput){
        console.log(userInput)
        writeToFile('README.md', generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
