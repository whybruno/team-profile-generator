// Imports the inquirer module
const inquirer = require("inquirer");
// Imports the path module
const path = require("path");
// Imports the fs module
const fs = require("fs");
// Imports the validator module
const validator = require('validator');
// These lines import classes defined in separate files
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Constructs the absolute path to the "output" directory
const OUTPUT_DIR = path.resolve(__dirname, "output");
// Creates the full path to the "team.html" file within the "output" directory
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Imports a render function named "render" from a module named "page-template.js"
const render = require("./src/page-template.js");

// Defines a function named "validateEmail" to check if an email address is valid
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

//  Defines a function named "validateNumber" to check if a string contains only digits
const validateNumber = (number) => {
  const numberRegex = /^\d+$/;
  return numberRegex.test(number);
};

async function main() {
  // Defines an array of questions to be asked for the team manager
  const managerQuestions = [
    { name: 'name', message: 'What is the team manager\'s name?' },
    { name: 'id', message: 'What is the team manager\'s ID?', validate: validateNumber },
    { name: 'email', message: 'What is the team manager\'s email?', validate: validateEmail },
    { name: 'officeNumber', message: 'What is the team manager\'s office number?', validate: validateNumber },
  ];
  // Prompts the user with the manager questions and stores the answers in managerAnswers
  const managerAnswers = await inquirer.prompt(managerQuestions);
  // Creates a new Manager object using the extracted answers
  const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);
  // Initializes an array teamMembers with the manager as the first element
  let teamMembers = [manager]; 
  // Sets a flag to control the loop for adding members
  let keepAdding = true;
  // Loops while keepAdding is true
  while (keepAdding) {
    // Prompts the user with options for adding members or finishing
    const addMemberChoice = await inquirer.prompt({
      type: 'list',
      name: 'choice',
      message: 'What would you like to do?',
      choices: ['Add an engineer', 'Add an intern', 'Finish building team'],
    });
    // Switches based on the selected choice
    switch (addMemberChoice.choice) {
      // Creates and prompts questions for an engineer, then adds the new Engineer object to teamMembers
      case 'Add an engineer':
        const engineerQuestions = [
          { name: 'name', message: 'What is the engineer\'s name?' },
          { name: 'id', message: 'What is the engineer\'s ID?', validate: validateNumber },
          { name: 'email', message: 'What is the engineer\'s email?', validate: validateEmail },
          { name: 'github', message: 'What is the engineer\'s GitHub username?' },
        ];
        // This line uses the inquirer library to prompt the user with a set of questions defined in engineerQuestions
        const engineerAnswers = await inquirer.prompt(engineerQuestions);
        // This line creates a new instance of the Engineer class
        const engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github);
        // This line assumes there's an array called teamMembers
        teamMembers.push(engineer);
        break;
      // Similar to engineer, but creates and prompts for an Intern object
      case 'Add an intern':
        const internQuestions = [
          { name: 'name', message: 'What is the intern\'s name?' },
          { name: 'id', message: 'What is the intern\'s ID?', validate: validateNumber },
          { name: 'email', message: 'What is the intern\'s email?', validate: validateEmail },
          { name: 'school', message: 'What is the intern\'s school?' },
        ];
        // This line uses the inquirer library to prompt the user with a series of questions defined in the internQuestions array
        const internAnswers = await inquirer.prompt(internQuestions);
        // This line creates a new Intern object using the Intern constructor
        const intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school);
        // This line adds the newly created intern object to the teamMembers array
        teamMembers.push(intern);
        break;
      // Sets keepAdding to false to exit the loop
      case 'Finish building team':
        keepAdding = false;
        break;
    };
  };

  // Stores the result of calling the render function with teamMembers as input
  const html = render(teamMembers);
  // Generated HTML content (html) to a file specified by the outputPath variable
  fs.writeFileSync(outputPath, html);
  // Prints a message to the console indicating that the team profile HTML file has been successfully generated
  console.log(`Team profile HTML generated at ${outputPath}`);
};

main();