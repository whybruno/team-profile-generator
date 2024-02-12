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