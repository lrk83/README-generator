// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const generateDoc = require('./src/page-template');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    messgae: "what is your project's title?"
},
{
    type: 'input',
    name: 'decription',
    message: 'Please enter a short description of your project explaining the what, why, and how. What was your motivation? Why did you build this project? What problem does it solve? What did you learn? What makes your project stand out?'
},
{
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
},
{
    type: 'input',
    name: 'usage',
    message: "Please provide instructions for use"
},
{
    type: 'input',
    name: 'contribution',
    message: "If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so."
},
{
    type: 'input',
    name: 'testing',
    message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them.'
},
{
    type: 'list',
    name: 'license',
    message: 'Choose an open source license for your application',
    choices: ['Apache License 2.0','GNU GPLv2','GNU GPLv3','MIT','ISC'],
},
{
    type: 'input',
    name: 'github',
    message: 'Please enter your github username'
},
{
    type: 'input',
    name: 'email',
    message: 'Please enter your email'
}
];

// TODO: Create a function to write README file
function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', data, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: "File created!"
            });
        });
    });
};

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions);
};

// Function call to initialize app
init()
    .then(projectData => {
        return generateDoc(projectData);
    })
    .then(pageText => {
        return writeToFile(pageText)
    });
