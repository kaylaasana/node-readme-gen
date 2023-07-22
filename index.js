// adding packages
const inquirer = require('inquirer');
const fs = require('fs')

const generateMarkdown = require('./utils/generateMarkdown')

// question prompts the user will see
const questions = [
    {
        type: 'input',
        message: 'What is your github user name?',
        name: 'userName'
    },
    {
        type: 'input',
        message: 'What is your github email?',
        name: 'email'
    },
    {
        type: 'input',
        message: "What is your project title?",
        name: "projTitle",
    },
    {
        type: 'list',
        message: "Pick one of the following licenses",
        name: 'license',
        choices: ['Apache2.0', 'BSD 3', 'MIT', 'GPL v3', 'IBM',  'none']
    },
    {
        type: 'input',
        message: 'Please provide a description of your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please provide installation instructions for your project',
        default: 'npm i',
        name: 'installInst',
    },
    {
        type: 'input',
        message: 'Please provide usage information',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please provide any contributors to this project',
        name: 'contributions',
    },
    {
        type: 'input',
        message: 'Please provide any relevant testing instructions',
        name: 'testing',
    }
];

// initialize app
function init() { 
// ask the user questions
    inquirer
    .prompt(questions)
    // we need to save the answers, maybe as a one object
    .then((answers) => {
        console.log(answers)
        let markDown = generateMarkdown(answers)        
        writeToFile('generate fileName', markDown)
    }).catch((error) => {
        console.log(error);
    });

}

// write README file
function writeToFile(fileName, answers) {
    fs.writeFile(fileName, answers, (err) => 
    err ? console.error(err) : console.log('yay!'))
}



// Function call to initialize app
init();