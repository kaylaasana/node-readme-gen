// TODO: Include packages needed for this application

const { default: inquirer } = require('inquirer');
// add a package that will import generate file
// export 'require' from a file const bad math = require('./badmath.js');
// use your own word to name the variable (not matching badmath)
// node.js will be executed

const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "question here",
        name: "apptitle",
    },
    {
        type: 'list',
        message: "Pick one of the following licenses",
        name: 'license',
        choices: ['list license options in here']
    },
];

// TODO: Create a function to initialize app
function init() { 
// ask the user questions
    inquirer
    .prompt([
        // pass your questions here
        
    ])
    // we need to save the answers, maybe as a one object
    .then((answers) => {
        console.log(answers)

        // use user feedback for...
        // create the content from the responses, combine them into big string, 
        // call generateMarkdown(answers) function (call it), pass in the perimeter keys
        let markDown = generateMarkdown(answers)
        // call writeToFile()
    }).catch((error) => {
        console.log(error);
    });

}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // create readme
}



// Function call to initialize app
init();

// create a variable ex: result = init();